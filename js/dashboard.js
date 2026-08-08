// js/dashboard.js - ระบบดึงข้อมูลข่าวสารจาก data/news.json

document.addEventListener("DOMContentLoaded", function () {
    loadNewsData();
});

function loadNewsData() {
    const box = document.getElementById("newsList");
    if (!box) return;

    // ดึงข้อมูลข่าวจากไฟล์ data/news.json
    fetch("data/news.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            box.innerHTML = "";

            if (!data || data.length === 0) {
                box.innerHTML = `
                    <div class="py-6 text-center text-gray-400 text-xs">
                        ยังไม่มีข้อมูลข่าวประชาสัมพันธ์ในขณะนี้
                    </div>`;
                return;
            }

            // ดึง 5 ข่าวล่าสุดมาแสดง
            data.slice(0, 5).forEach((news, index) => {
                const dateText = news.date ? news.date : 'ข่าวประชาสัมพันธ์';
                const isLast = index === Math.min(data.length, 5) - 1;

                box.innerHTML += `
                    <div class="py-3.5 hover:bg-slate-800/40 px-2 rounded-xl transition ${!isLast ? 'border-b border-slate-800/80' : ''}">
                        <div class="flex items-center justify-between gap-2 mb-1">
                            <span class="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                📢 ข่าวชุมชน
                            </span>
                            <span class="text-[11px] text-gray-500 font-mono">${dateText}</span>
                        </div>
                        <h3 class="font-bold text-slate-100 text-sm mb-1 hover:text-amber-400 transition">
                            ${news.title}
                        </h3>
                        <p class="text-xs text-gray-400 leading-relaxed">
                            ${news.detail}
                        </p>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error("Error loading news:", error);
            box.innerHTML = `
                <div class="py-6 text-center text-gray-400 text-xs flex flex-col items-center gap-1">
                    <span>📢 ยังไม่มีข้อมูลข่าวสารในขณะนี้</span>
                    <span class="text-[10px] text-gray-500">(หรือยังไม่ได้สร้างไฟล์ data/news.json)</span>
                </div>`;
        });
}
