// =====================================
// Rongkhem Smart Village
// AI Assistant v1.0
// =====================================


class VillageAI {


constructor(){

    this.knowledge=[];

}



async load(){

    this.knowledge =
    await API.load("knowledge.json");

}



ask(question){


let q =
question.toLowerCase();


let result =
this.knowledge.find(item =>


q.includes(
item.keyword
)

);



if(result){

    return result.answer;

}


return "ขออภัย ยังไม่พบข้อมูล กรุณาติดต่อผู้ดูแลระบบ";

}



}



const VILLAGE_AI =
new VillageAI();
