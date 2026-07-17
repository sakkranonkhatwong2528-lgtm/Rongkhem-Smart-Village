// =====================================
// Rongkhem Smart Village
// Map Module v1.0
// =====================================


class VillageMap {


    constructor(){

        this.map = null;

    }



    init(){


        this.map =
        L.map('villageMap')
        .setView(
            [19.15,99.90],
            15
        );


        L.tileLayer(
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom:19
            }
        )
        .addTo(this.map);


        this.loadMarker();


    }



    async loadMarker(){


        const locations =
        await API.load("location.json");


        locations.forEach(item=>{


            L.marker(
                [
                item.lat,
                item.lng
                ]
            )
            .addTo(this.map)
            .bindPopup(`

            <h3>
            ${item.name}
            </h3>

            <p>
            ${item.detail || ""}
            </p>

            `);


        });


    }


}



const VILLAGE_MAP =
new VillageMap();
