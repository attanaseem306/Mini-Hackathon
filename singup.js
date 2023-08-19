import {auth,db} from './firebase.mjs'
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { collection , addDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";


document.getElementById("btn").addEventListener("click",()=>{
let fname =document.getElementById("fname")
let lname =document.getElementById("lname")
let rpass =document.getElementById("rpass")
let password =document.getElementById("pass").value
let email =document.getElementById("email").value

if(email == '' || password == '' || fname.value == '' || lname.value == '' || rpass.value == ''){
    alert('please fill the input')
 }
 else{

     createUserWithEmailAndPassword(auth, email, password)
     .then(async(userCredential) => {
     // Signed in 
     const user = userCredential.user;
     console.log(user);
     try {
         const docRef = await addDoc(collection(db, "Sinup-Data"), {
           email : email,
           password : password,
           fname : fname.value,
           lname : lname.value,
           rpass : rpass.value,
         });
         console.log("Document written with ID: ", docRef.id);
         setTimeout(() => {
             alert('singup successfully');
             location.href = './login.html'
         }, 1000);
       } catch (e) {
         console.error("Error adding document: ", e);
       }
    }
)}
    
})