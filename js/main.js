// js/main.js - สคริปต์สแกนและดึง Component ของระบบ Smart Village บ้านร่องเข็ม

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-container", "components/header.html");
    loadComponent("sidebar-container", "components/sidebar.html");
    loadComponent("footer-container", "components/footer.html");
});

/**
 * ดึงไฟล์ HTML มาแสดงผลใน Element ตาม ID ที่กำหนด
 */
function loadComponent(elementId, filePath) {
    const container = document.getElementById(elementId);
    if (!container) return;

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            container.innerHTML = data;
            
            // ปรับสถานะ Active Link บน Sidebar ตามหน้าที่เปิดอยู่
            if (elementId === "sidebar-container") {
                highlightActiveMenu();
            }
        })
        .catch(error => {
            console.error(error);
        });
}

/**
 * ฟังก์ชันไฮไลต์ เมนู Sidebar ปัจจุบันที่ผู้ใช้เปิดอยู่
 */
function highlightActiveMenu() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll("#sidebar-container a");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            link.classList.add("bg-amber-500/10", "text-amber-400", "border-r-4", "border-amber-400", "font-bold");
            link.classList.remove("text-gray-400", "hover:bg-slate-800");
        }
    });
}
