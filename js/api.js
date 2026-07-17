// ===============================
// Rongkhem Smart Village API
// Version 1.0
// ===============================

const API = {

    // โหลดไฟล์ JSON
    async load(file) {

        try {

            const response = await fetch(`data/${file}`);

            if (!response.ok) {
                throw new Error(`ไม่พบไฟล์ ${file}`);
            }

            return await response.json();

        } catch (error) {

            console.error(error);

            return [];

        }

    },

    // นับจำนวนข้อมูล
    async count(file) {

        const data = await this.load(file);

        return data.length;

    }

};
