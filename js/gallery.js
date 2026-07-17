// =====================================
// Rongkhem Smart Village
// Gallery Module v1.0
// =====================================

class GalleryManager {

    constructor(){

        this.images = [];

    }


    async load(){

        this.images =
        await API.load("gallery.json");

        return this.images;

    }


    render(containerId){

        const container =
        document.getElementById(containerId);


        if(!container) return;


        container.innerHTML="";


        this.images.forEach(item=>{


            container.innerHTML += `

            <div class="gallery-card">

                <img src="${item.image}">


                <h3>
                ${item.title || ""}
                </h3>


                <p>
                ${item.category || ""}
                </p>


            </div>

            `;


        });


    }


    filter(category){

        return this.images.filter(item =>

            item.category === category

        );

    }


    search(keyword){

        return this.images.filter(item =>

            JSON.stringify(item)
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )

        );

    }


}


const GALLERY =
new GalleryManager();
