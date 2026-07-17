// =====================================
// Rongkhem Smart Village
// Document Module v1.0
// =====================================


class DocumentManager {


    constructor(){

        this.documents=[];

    }



    async load(){

        this.documents =
        await API.load("document.json");

        return this.documents;

    }



    render(containerId){


        const box =
        document.getElementById(containerId);


        if(!box) return;


        box.innerHTML="";


        this.documents.forEach((doc,index)=>{


            box.innerHTML += `

            <div class="document-card">


                <h3>
                📄 ${doc.title}
                </h3>


                <p>
                ประเภท :
                ${doc.type}
                </p>


                <p>
                วันที่ :
                ${doc.date}
                </p>


                <button onclick="printDocument(${index})">
                🖨️ พิมพ์
                </button>


            </div>

            `;


        });


    }



    add(data){

        this.documents.push(data);

        this.render("documentList");

    }


}



const DOCUMENT =
new DocumentManager();
