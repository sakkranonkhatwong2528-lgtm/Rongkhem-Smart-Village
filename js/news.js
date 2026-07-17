// =====================================
// Rongkhem Smart Village
// News Module v1.0
// =====================================

class NewsManager {

    constructor() {
        this.news = [];
    }

    async load() {

        this.news = await API.load("news.json");

        return this.news;

    }

    render(containerId) {

        const container = document.getElementById(containerId);

        if (!container) return;

        container.innerHTML = "";

        this.news.forEach(item => {

            container.innerHTML += `

            <div class="news-card">

                <h3>${item.title}</h3>

                <small>${item.date}</small>

                <p>${item.detail}</p>

            </div>

            `;

        });

    }

    latest(limit = 5) {

        return [...this.news]
            .reverse()
            .slice(0, limit);

    }

    search(keyword) {

        return this.news.filter(item =>

            item.title.toLowerCase().includes(keyword.toLowerCase()) ||

            item.detail.toLowerCase().includes(keyword.toLowerCase())

        );

    }

}

const NEWS = new NewsManager();
