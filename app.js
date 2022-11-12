import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


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


let loginemail = document.getElementById('loginemail');
let loginpassword = document.getElementById('loginpassword');
let loginbtn = document.getElementById('login')
let errors = document.getElementById('hiddenmsg')
let load = document.getElementById('load')
let emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/




    loginbtn.addEventListener("click", () => {
        loginbtn.style.display = "none"
        load.style.display = "block"
        signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user)
                location.href = "dashboard.html"
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (loginemail.value.trim() === "") {
                    errors.innerHTML = "Please enter Email"
                    loginbtn.style.display = "block"
                    load.style.display = "none"
                    setTimeout(function () {
                        errors.innerHTML = ""
                    }, 2000)
                }
                else if (!emailRegx.test(loginemail.value)) {
                    errors.innerHTML = "Please enter valid email"
                    loginbtn.style.display = "block"
                    load.style.display = "none"
                    setTimeout(function () {
                        errors.innerHTML = ""
                    }, 2000)
                }
                else if (loginpassword.value.trim() === "") {
                    errors.innerHTML = "Please enter password"
                    loginbtn.style.display = "block"
                    load.style.display = "none"
                    setTimeout(function () {
                        errors.innerHTML = ""
                    }, 2000)

                }
                else if (loginpassword.value.length < 6) {
                    errors.innerHTML = "Password Should be at least 6"
                    loginbtn.style.display = "block"
                    load.style.display = "none"
                    setTimeout(function () {
                        errors.innerHTML = ""
                    }, 2000)
                }
                else if (errorCode === "auth/wrong-password") {
                    errors.innerHTML = "wrong password"
                    loginbtn.style.display = "block"
                    load.style.display = "none"
                    setTimeout(function () {
                        errors.innerHTML = ""
                    }, 2000)
                } else if (errorCode === "auth/user-not-found") {
                    errors.innerHTML = "user doesn't exist"
                    loginbtn.style.display = "block"
                    load.style.display = "none"
                    setTimeout(function () {
                        errors.innerHTML = ""
                    }, 2000)
                }
                else {
                    console.log(errorMessage)
                }


            });
    })

