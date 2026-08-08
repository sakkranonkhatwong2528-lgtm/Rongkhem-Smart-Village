# 🏡 Smart Village บ้านร่องเข็ม (หมู่ที่ 6 ต.จำป่าหวาย อ.เมืองพะเยา จ.พะเยา)

> **ระบบสารสนเทศเพื่อการบริหารจัดการชุมชน และส่งเสริมการท่องเที่ยวเชิงอนุรักษ์อย่างยั่งยืน**  
> พัฒนาภายใต้สถาปัตยกรรม **Web Native Stack** (HTML5, Tailwind CSS, JavaScript ES6) รองรับการแสดงผลผ่าน **GitHub Pages**

---

## 📌 วัตถุประสงค์โครงการ

1. **ดิจิทัลเพื่อชุมชน (Digital Village):** ยกระดับการบริหารจัดการหมู่บ้านร่องเข็มสู่ระบบดิจิทัล เพิ่มประสิทธิภาพการสื่อสารระหว่างผู้นำชุมชนและประชาชน
2. **ฐานข้อมูลและสวัสดิการ:** รวบรวมข้อมูลทะเบียนครัวเรือน ผู้สูงอายุ กลุ่มเปราะบาง และงานสาธารณสุข (อสม.) ให้เข้าถึงได้ง่ายและปลอดภัย
3. **การส่งเสริมเศรษฐกิจและทรัพยากร:** ประชาสัมพันธ์แหล่งท่องเที่ยวธรรมชาติ **"ซับน้ำจำ"**, วัดร่องเข็ม และผลิตภัณฑ์ OTOP ของกลุ่มแม่บ้าน
4. **ศูนย์รับเรื่องร้องเรียนและ AI ผู้ช่วย:** เพิ่มช่องทางแจ้งปัญหาความเดือดร้อน พร้อมระบบ AI ตอบคำถามระเบียบชุมชนตลอด 24 ชั่วโมง

---

## 💻 เทคโนโลยีที่ใช้ในการพัฒนา (Tech Stack)

* **Frontend:** HTML5, Tailwind CSS (via CDN), CSS3 Custom Variables
* **Icon & Font:** Emoji System Native, Google Fonts (Sarabun)
* **Scripting & Data Management:** JavaScript (ES6+ Native), LocalStorage Web API
* **Architecture:** Component-Based Loading (`fetch` API) แยก Header, Sidebar, Footer เพื่อลดความซ้ำซ้อนของโค้ด
* **Hosting Platform:** GitHub Pages / Static Web Hosting

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
sakkranonkhatwong2528-lgtm/
├── 📁 components/            # ไฟล์ Component กลางสำหรับโหลดซ้ำ
│   ├── 📄 header.html        # ส่วนหัวของเว็บไซต์ (Navigation & Logo)
│   ├── 📄 sidebar.html       # เมนูนำทางด้านข้าง (v4.1)
│   └── 📄 footer.html        # ส่วนท้ายของเว็บไซต์
├── 📁 data/                  # ไฟล์ข้อมูลตั้งต้น
│   └── 📄 news.json          # ข้อมูลข่าวประชาสัมพันธ์เริ่มต้น
├── 📁 js/                    # สคริปต์การทำงานหลัก
│   ├── 📄 main.js            # โหลด Component อัตโนมัติ & ระบบ Active Menu
│   └── 📄 dashboard.js       # ระบบประมวลผลสถิติบน Dashboard
├── 📁 images/                # โฟลเดอร์เก็บรูปภาพประกอบทั้งหมด
├── 📄 style.css              # Custom Style & Custom Scrollbar Theme (Dark Slate & Gold)
│
├── 📑 หน้าเว็บหลัก (Main Pages)
├── 📄 index.html             # หน้าปก Hero Section & ต้อนรับผู้เยี่ยมชม
├── 📄 dashboard.html         # แดชบอร์ดสรุปสถิติข้อมูลชุมชน
├── 📄 news.html              # หน้าอ่านข่าวสารประชาสัมพันธ์
│
├── 📑 หน้าสถานที่ & เศรษฐกิจชุมชน (Ecology & Local Economy)
├── 📄 subnamjam.html         # ฐานทรัพยากรธรรมชาติ แหล่งซับน้ำจำ + ระบบ IoT ตรวจคุณภาพน้ำ
├── 📄 wat-rongkhem.html      # วัดร่องเข็ม ศูนย์รวมจิตใจและงานบุญประเพณี
├── 📄 products.html          # ตลาดสินค้าชุมชน & ผลิตภัณฑ์ OTOP
│
├── 📑 หน้าข้อมูลทะเบียน & สวัสดิการ (Registry & Welfare)
├── 📄 household.html        # ระบบทะเบียนครัวเรือน & กลุ่มข้าวสาร
├── 📄 elderly.html          # ข้อมูลผู้สูงอายุ & กำหนดการเบี้ยยังชีพ
├── 📄 vulnerable.html       # ศูนย์ช่วยเหลือกลุ่มเปราะบาง/ผู้พิการ/ผู้ป่วยติดเตียง
│
├── 📑 หน้างานบริการ & ความปลอดภัย (Services & Safety)
├── 📄 osm.html               # งาน อสม. สุขภาพชุมชน & ตรวจคัดกรองโรค
├── 📄 oppor.html             # ศูนย์ อปพร. บรรเทาสาธารณภัย
├── 📄 shorbor.html            # ชุดรักษาความสงบเรียบร้อยหมู่บ้าน (ชรบ.)
├── 📄 complaint.html         # ระบบแจ้งเรื่องร้องเรียน/ไฟถนนเสีย/ขยะ
├── 📄 ai-assistant.html      # AI ผู้ช่วยตอบคำถามชุมชน 24 ชม.
├── 📄 contact.html           # รวมเบอร์ติดต่อผู้นำชุมชน & สายด่วนฉุกเฉิน
│
└── 📑 หน้าส่วนผู้ดูแลระบบ (Admin Systems)
    ├── 📄 admin-panel.html   # Admin Center (CRUD ประชากร, ผู้นำ, Health, กิจกรรม, ร้องเรียน)
    └── 📄 admin-news.html    # ระบบโพสต์และจัดการข่าวสารโดยผู้ใหญ่บ้าน
