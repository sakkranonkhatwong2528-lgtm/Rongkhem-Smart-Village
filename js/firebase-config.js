const firebaseConfig = {

apiKey: "ใส่ของท่าน",

authDomain: "ใส่ของท่าน",

projectId: "ใส่ของท่าน",

storageBucket: "ใส่ของท่าน",

messagingSenderId: "ใส่ของท่าน",

appId: "ใส่ของท่าน"

};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const storage = firebase.storage();
