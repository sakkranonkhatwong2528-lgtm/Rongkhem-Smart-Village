const Utils = {

    formatDate(date) {
        return new Date(date).toLocaleDateString("th-TH");
    },

    byId(id) {
        return document.getElementById(id);
    },

    clear(id) {
        this.byId(id).innerHTML = "";
    },

    create(tag) {
        return document.createElement(tag);
    }

};
