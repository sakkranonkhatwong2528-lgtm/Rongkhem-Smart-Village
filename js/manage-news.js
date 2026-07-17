// =====================================
// Rongkhem Smart Village
// Manage News Module v1.0
// =====================================


class ManageNews {


    constructor(){

        this.news=[];

    }


    async load(){

        this.news =
        await API.load("news.json");

        this.render();

    }



    render(){

        const box =
        document.getElementById("adminNewsList");


        if(!box) return;


        box.innerHTML="";


        this.news.forEach((item,index)=>{


            box.innerHTML += `

            <div class="admin-news-card">


                <h3>
                ${item.title}
                </h3>


                <p>
                ${item.date}
                </p>


                <button onclick="editNews(${index})">
                ✏️ แก้ไข
                </button>


                <button onclick="deleteNews(${index})">
                🗑️ ลบ
                </button>


            </div>

            `;


        });


    }


    add(data){

        this.news.push(data);

        this.render();

    }


    remove(index){

        this.news.splice(index,1);

        this.render();

    }


}


const MANAGE_NEWS =
new ManageNews();
