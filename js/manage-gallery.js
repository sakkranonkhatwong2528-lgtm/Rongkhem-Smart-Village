// =====================================
// Rongkhem Smart Village
// Manage Gallery Module v1.0
// =====================================

class ManageGallery {


    constructor(){

        this.images=[];

    }



    async load(){

        this.images =
        await API.load("gallery.json");

        this.render();

    }



    render(){

        const box =
        document.getElementById("adminGalleryList");


        if(!box) return;


        box.innerHTML="";


        this.images.forEach((item,index)=>{


            box.innerHTML += `

            <div class="admin-gallery-card">

                <img src="${item.image}">

                <h3>
                ${item.title}
                </h3>


                <p>
                หมวด:
                ${item.category}
                </p>


                <button onclick="deleteImage(${index})">
                🗑️ ลบ
                </button>


            </div>

            `;


        });


    }



    add(data){

        this.images.push(data);

        this.render();

    }



    remove(index){

        this.images.splice(index,1);

        this.render();

    }


}



const MANAGE_GALLERY =
new ManageGallery();
