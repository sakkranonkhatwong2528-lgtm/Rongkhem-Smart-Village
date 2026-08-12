// ==========================================
// 1. ตั้งค่าการเชื่อมต่อ Supabase Client
// ==========================================
const SUPABASE_URL = "https://your-project-id.supabase.co"; // ใส่ URL ของคุณ
const SUPABASE_KEY = "your-anon-key";                      // ใส่ Anon Key ของคุณ

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// กำหนดชื่อตารางและ Storage Bucket
const TABLE_NAME = 'citizens';
const BUCKET_NAME = 'village-images';

// ==========================================
// 2. ฟังก์ชันอัปโหลดรูปภาพไปยัง Supabase Storage
// ==========================================
async function uploadCitizenImage(file) {
  try {
    if (!file) return null;

    // ตั้งชื่อไฟล์ป้องกันซ้ำ: timestamp_randomstring.extension
    const fileExt = file.name.split('.').pop();
    const fileName = `citizens/${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`;

    // อัปโหลดไฟล์ไปยัง Storage Bucket
    const { data, error } = await supabaseClient
      .storage
      .from(BUCKET_NAME)
      .upload(fileName, file);

    if (error) {
      console.error('Upload Error:', error.message);
      alert('อัปโหลดรูปภาพไม่สำเร็จ: ' + error.message);
      return null;
    }

    // ดึง Public Direct URL ของรูปภาพ
    const { data: publicUrlData } = supabaseClient
      .storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  } catch (err) {
    console.error('Unexpected error during image upload:', err);
    return null;
  }
}

// ==========================================
// 3. READ: ดึงข้อมูลประชากรมาแสดงในตาราง
// ==========================================
async function fetchCitizens() {
  const tableBody = document.querySelector("#citizenTable tbody");
  if (!tableBody) return;

  // แสดงสถานะกำลังโหลด
  tableBody.innerHTML = `<tr><td colspan="5" class="text-center py-4">กำลังโหลดข้อมูล...</td></tr>`;

  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select('*')
    .order('house_number', { ascending: true });

  if (error) {
    console.error('Fetch Error:', error.message);
    tableBody.innerHTML = `<tr><td colspan="5" class="text-center text-red-500 py-4">เกิดข้อผิดพลาดในการดึงข้อมูล</td></tr>`;
    return;
  }

  // ล้างข้อมูลตาราง
  tableBody.innerHTML = '';

  if (data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-gray-500">ไม่พบข้อมูลประชากร</td></tr>`;
    return;
  }

  // วนลูปสร้าง HTML แถวตาราง
  data.forEach((item) => {
    const avatarUrl = item.image_url || 'https://via.placeholder.com/40?text=User';
    const row = document.createElement('tr');
    row.className = "border-b hover:bg-gray-50";

    row.innerHTML = `
      <td class="px-4 py-3 font-medium">${item.house_number || '-'}</td>
      <td class="px-4 py-3 flex items-center gap-3">
        <img src="${avatarUrl}" class="w-10 h-10 rounded-full object-cover border" alt="${item.fullname}">
        <span>${item.fullname}</span>
      </td>
      <td class="px-4 py-3">
        <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
          ${item.welfare_group || 'ประชาชนทั่วไป'}
        </span>
      </td>
      <td class="px-4 py-3">
        <button onclick="editCitizen('${item.id}')" class="text-blue-600 hover:underline mr-3">แก้ไข</button>
        <button onclick="deleteCitizen('${item.id}', '${item.fullname}')" class="text-red-600 hover:underline">ลบ</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// ==========================================
// 4. CREATE / UPDATE: บันทึกหรือแก้ไขข้อมูลประชากร
// ==========================================
async function saveCitizen(event) {
  event.preventDefault();

  const citizenId = document.getElementById('citizenId')?.value; // มีค่าเมื่อแก้ไข
  const houseNumber = document.getElementById('houseNumber').value;
  const fullname = document.getElementById('fullname').value;
  const welfareGroup = document.getElementById('welfareGroup').value;
  const imageFileInput = document.getElementById('imageFile');

  let imageUrl = document.getElementById('existingImageUrl')?.value || '';

  // ถ้ามีการอัปโหลดรูปภาพใหม่
  if (imageFileInput && imageFileInput.files[0]) {
    const uploadedUrl = await uploadCitizenImage(imageFileInput.files[0]);
    if (uploadedUrl) imageUrl = uploadedUrl;
  }

  const payload = {
    house_number: houseNumber,
    fullname: fullname,
    welfare_group: welfareGroup,
    image_url: imageUrl,
    updated_at: new Date().toISOString()
  };

  let result;
  if (citizenId) {
    // กรณีแก้ไขข้อมูล (UPDATE)
    result = await supabaseClient
      .from(TABLE_NAME)
      .update(payload)
      .eq('id', citizenId);
  } else {
    // กรณีเพิ่มข้อมูลใหม่ (CREATE)
    payload.created_at = new Date().toISOString();
    result = await supabaseClient
      .from(TABLE_NAME)
      .insert([payload]);
  }

  if (result.error) {
    alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล: ' + result.error.message);
  } else {
    alert('บันทึกข้อมูลสำเร็จแล้ว!');
    resetForm();
    fetchCitizens(); // โหลดข้อมูลตารางใหม่
  }
}

// ==========================================
// 5. EDIT (PREPARE): ดึงข้อมูลรายการที่เลือกมาใส่ ฟอร์ม
// ==========================================
async function editCitizen(id) {
  const { data, error } = await supabaseClient
    .from(TABLE_NAME)
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    alert('ไม่พบข้อมูลที่ต้องการแก้ไข');
    return;
  }

  // นำข้อมูลไปเติมใส่ใน Input แบบฟอร์ม
  document.getElementById('citizenId').value = data.id;
  document.getElementById('houseNumber').value = data.house_number;
  document.getElementById('fullname').value = data.fullname;
  document.getElementById('welfareGroup').value = data.welfare_group;
  document.getElementById('existingImageUrl').value = data.image_url || '';

  // แสดง Preview รูปภาพที่มีอยู่เดิม (ถ้ามี)
  const imgPreview = document.getElementById('imagePreview');
  if (imgPreview && data.image_url) {
    imgPreview.src = data.image_url;
    imgPreview.classList.remove('hidden');
  }

  // เลื่อนหน้าจอไปที่ฟอร์ม
  document.getElementById('citizenForm')?.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 6. DELETE: ลบข้อมูลประชากร
// ==========================================
async function deleteCitizen(id, fullname) {
  if (!confirm(`คุณต้องการลบข้อมูลของ "${fullname}" ใช่หรือไม่?`)) return;

  const { error } = await supabaseClient
    .from(TABLE_NAME)
    .delete()
    .eq('id', id);

  if (error) {
    alert('ไม่สามารถลบข้อมูลได้: ' + error.message);
  } else {
    alert('ลบข้อมูลเรียบร้อยแล้ว');
    fetchCitizens();
  }
}

// ==========================================
// 7. HELPER: ล้างค่าแบบฟอร์ม
// ==========================================
function resetForm() {
  const form = document.getElementById('citizenForm');
  if (form) form.reset();
  
  if (document.getElementById('citizenId')) document.getElementById('citizenId').value = '';
  if (document.getElementById('existingImageUrl')) document.getElementById('existingImageUrl').value = '';
  
  const imgPreview = document.getElementById('imagePreview');
  if (imgPreview) imgPreview.classList.add('hidden');
}

// โหลดข้อมูลเมื่อเปิดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
  fetchCitizens();
  
  const form = document.getElementById('citizenForm');
  if (form) {
    form.addEventListener('submit', saveCitizen);
  }
});
