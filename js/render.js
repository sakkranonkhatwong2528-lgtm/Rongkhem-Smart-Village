// ======================================
// Rongkhem Smart Village Render Engine
// Version 1.0
// ======================================

const Render = {

    // แสดง Card ผู้นำ
    leader(containerId, data) {

        const container = document.getElementById(containerId);

        if (!container) return;

        container.innerHTML = "";

        data.forEach(person => {

            container.innerHTML += `

            <div class="card">

                <img src="${person.image}" class="profile">

                <h3>${person.name}</h3>

                <p>${person.position}</p>

                <small>${person.detail}</small>

            </div>

            `;

        });

    },

    // แสดง Card ข่าว
    news(containerId, data) {

        const container = document.getElementById(containerId);

        if (!container) return;

        container.innerHTML = "";

        data.forEach(item => {

            container.innerHTML += `

            <div class="news-card">

                <h3>${item.title}</h3>

                <small>${item.date}</small>

                <p>${item.detail}</p>

            </div>

            `;

        });

    },

    // แสดง Card กิจกรรม
    activity(containerId, data) {

        const container = document.getElementById(containerId);

        if (!container) return;

        container.innerHTML = "";

        data.forEach(item => {

            container.innerHTML += `

            <div class="activity-card">

                <img src="${item.image}">

                <h3>${item.title}</h3>

                <p>${item.date}</p>

            </div>

            `;

        });

    }

};
