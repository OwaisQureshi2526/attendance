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

let classtime = document.getElementById("classtime")
let classday = document.getElementById("classday")
let Teachername = document.getElementById("Teachername")
let secname = document.getElementById("secname")
let cours = document.getElementById("cours")
let batchnum = document.getElementById("batchnum")
let error = document.getElementById("error")
let submit = document.getElementById("submit")
let tbody = document.getElementById("tbody")

window.onload = onAuthStateChanged(auth, (user) => {
    event.preventDefault()
    if (user) {

        const uid = user.uid;
        show()
    } else {

        window.location = "index.html"
    }
})

submit.addEventListener("click", async () => {
    if (classtime.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (classday.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (Teachername.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (secname.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (cours.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else if (batchnum.value.trim() == "") {
        error.innerHTML = "input is empty"
        setTimeout(function () {
            error.innerHTML = ""
        }, 2000)
    } else {
        const docRef = await addDoc(collection(db, "classes"), {
            classtime: classtime.value,
            classdays: classday.value,
            section: secname.value,
            teacher: Teachername.value,
            batch: batchnum.value,
            course: cours.value,
            timestamp: new Date()
        });
        classtime.value = ""
        classday.value = ""
        secname.value = ""
        Teachername.value = ""
        batchnum.value = ""
        cours.value = ""
        console.log("Document written with ID: ", docRef.id);
    }
})

let show = () => {
    //     const q = query(collection(db, "classes"), where("course", "!=", false),orderBy("timestamp", "desc"));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     tbody.innerHTML = ""
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.data());

    //     tbody.innerHTML += `
    //       <tr>
    //   <td>${doc.data().course}</td>
    //     <td>${doc.data().teacher}</td>
    //      <td>${doc.data().section}</td>
    //       <td>${doc.data().batch}</td>
    //       <td>${doc.data().classdays}</td>
    //       <td>${doc.data().classtime}</td>
    //       <td ><i class="fa-regular fa-pen-to-square"></i></td>
    //        <td onclick = "delet('${doc.id}',this)"><i class="fa-sharp fa-solid fa-trash"></i></td>
    //     </tr>`
    //   })
    //   console.log("Current cities in CA: ");
    // });

    const q = query(collection(db, "classes"))

    onSnapshot(q, (value) => {
        tbody.innerHTML = "";
        value.docs.forEach((docsValue) => {
            console.log(docsValue.data())
            tbody.innerHTML += `
      <tr>
  <td>${docsValue.data().course}</td>
   <td>${docsValue.data().teacher}</td>
     <td>${docsValue.data().section}</td>
      <td>${docsValue.data().batch}</td>
     <td>${docsValue.data().classdays}</td>
          <td>${docsValue.data().classtime}</td>
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


// const querySnapshot = await getDocs(collection(db, "classes"));
// querySnapshot.forEach((doc) => {
//   tbody.innerHTML += `
//   <tr>
//   <td>${doc.data().course}</td>
//   <td>${doc.data().teacher}</td>
//   <td>${doc.data().section}</td>
//   <td>${doc.data().batch}</td>
//   <td>${doc.data().classdays}</td>
//   <td>${doc.data().classtime}</td>
//   <td ><i class="fa-regular fa-pen-to-square"></i></td>
//   <td onclick = "delet('${doc.id}',this)"><i class="fa-sharp fa-solid fa-trash"></i></td>
// </tr>
//   `
//   console.log(doc.id, " => ", doc.data());
// });
let delte = document.getElementById("delete")

let delet = async (id, th) => {
    await deleteDoc(doc(db, "classes", id));
    th.parentNode.innerHTML = ""

}

window.delet = delet