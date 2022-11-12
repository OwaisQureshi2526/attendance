let classe = document.getElementById("classe")
let students= document.getElementById("students")
let atten = document.getElementById("atten")
if(classe){

    classe.addEventListener("click",()=>{
        
        window.location = "./classes.html"
    })
}
if(students){

    students.addEventListener("click",()=>{
        
        window.location = "./students.html"
    })
}
if(atten){

    atten.addEventListener("click",()=>{
        
        window.location = "./atten.html"
    })
}