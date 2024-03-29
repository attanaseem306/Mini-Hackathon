import { auth, db, storage } from "./firebase.mjs";
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { ref, getDownloadURL, uploadBytes, deleteObject } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";



onAuthStateChanged(auth, async(user) => {
    if (user) {
        console.log(user.uid);
        console.log(user.email);
        const uid = user.uid;

        document.getElementById('inner').innerHTML = `
        <a href=""  onclick='log()'>logout</a>`

        async function post() {

            console.log(user.email);
            const q1 = query(collection(db, "Sinup-Data"), where("email", "==", user.email));

            const querySnapshot1 = await getDocs(q1);
            querySnapshot1.forEach(async (doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data().fname);
                let name = doc.data().fname

                document.getElementById('name').innerHTML = `
                <p class="fw-bold text-light m-3">${name}</p>`

                const q = query(collection(db, "Detail-Post"));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    document.getElementById('root').innerHTML += `
                <div class="container mt-5">
                <div class="row">
                <div class="col-lg-10 blog">
               <div class="img d-flex">
                   <img src="${doc.data().img}" alt="">
                   <div class="text">
                       <h5 class="fw-bold">${doc.data().title}</h5>
                       <p>${name} <span>${doc.data().date}</span></p>
                   </div>
                   </div>
               <p class="mt-3 line">${doc.data().desc}</p>
              </div>
            </div>
            </div>`
                });

            });

        }
        post()
        window.post = post
        // ...
    } else {
        // User is signed out
        // ...
    }
});


function log(){
    signOut(auth).then(() => {
       alert('singout successfully')
       window.location.href="./index.html"
    
    }).catch((error) => {
        // An error happened.
    });

}
window.log = log


