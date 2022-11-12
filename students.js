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

let name = document.getElementById("name")
let fathername = document.getElementById("fathername")
let roll = document.getElementById("roll")
let contact = document.getElementById("contact")
let cnic = document.getElementById("cnic")
let course = document.getElementById("course")
let error = document.getElementById("error")
let submit = document.getElementById("submit")
let tbody = document.getElementById("tbody")

window.onload = onAuthStateChanged(auth, (user) => {
    event.preventDefault()
    if (user) {

        const uid = user.uid;
        stud()
    } else {

        window.location = "index.html"
    }
})

submit.addEventListener("click", async () => {
    if (name.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (fathername.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (roll.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (contact.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (cnic.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (course.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else {
        const docRef = await addDoc(collection(db, "students"), {
            name: name.value,
            fathername: fathername.value,
            roll: roll.value,
            contact: contact.value,
            cnic: cnic.value,
            course: course.value,
            timestamp: new Date()
        });
        name.value = ""
        fathername.value = ""
        roll.value = ""
        contact.value = ""
        cnic.value = ""
        course.value = ""
        console.log("Document written with ID: ", docRef.id);
    }
})

let stud = () => {
    const q = query(collection(db, "students"))

    onSnapshot(q, (value) => {
        tbody.innerHTML = "";
        value.docs.forEach((docsValue) => {
            console.log(docsValue.data())
            tbody.innerHTML += `
      <tr>
  <td>${docsValue.data().name}</td>
   <td>${docsValue.data().fathername}</td>
     <td>${docsValue.data().roll}</td>
      <td>${docsValue.data().contact}</td>
     <td>${docsValue.data().cnic}</td>
          <td>${docsValue.data().course}</td>
      <td ><i class="fa-regular fa-pen-to-square"></i></td>
      <td onclick = "delet('${doc.id}',this)"><i class="fa-sharp fa-solid fa-trash"></i></td>
   </tr>`
   classtime.value = ""
        classday.value = ""
        secname.value = ""
        Teachername.value = ""
        batchnum.value = ""
        cours.value = ""
        })
    })
}

let delet = async (id, th) => {
    await deleteDoc(doc(db, "students", id));
    th.parentNode.innerHTML = ""

}

window.delet = delet