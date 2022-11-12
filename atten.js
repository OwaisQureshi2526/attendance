import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    doc,
    query,
    where,
    getDocs,
    deleteDoc,
    orderBy
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBlGssRBzRPySYzU43w0kN88A2-5VR4IR8",
    authDomain: "attendance-55cda.firebaseapp.com",
    projectId: "attendance-55cda",
    storageBucket: "attendance-55cda.appspot.com",
    messagingSenderId: "1079711793262",
    appId: "1:1079711793262:web:b988f2cff01291bc12a67f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


let inp = document.getElementById("inp")
let btnn = document.getElementById("btnn")
let card = document.getElementById("card")


btnn.addEventListener("click",()=>{

    
    const q = query(collection(db, "students"), where("roll", "==", inp.value));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            card.innerHTML = `
            <div  class="card">
            <p>name: ${doc.data().name}</p>
            <p>father name: ${doc.data().fathername}</p>
            <p>roll: ${doc.data().roll}</p>
            <p>contact: ${doc.data().contact}</p>
            <p>cnic: ${doc.data().cnic}</p>
            
        </div>
            `
        });
        console.log("Current cities in CA: ",);
    });
    
})