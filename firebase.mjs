
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";


const firebaseConfig = {
    apiKey: "AIzaSyCVRstyCKwX9vEncLE2bGy6VJa5FgnssZM",
    authDomain: "hackathon-7727b.firebaseapp.com",
    projectId: "hackathon-7727b",
    storageBucket: "hackathon-7727b.appspot.com",
    messagingSenderId: "239693714532",
    appId: "1:239693714532:web:3f36bd3972f3cff1cffb71",
    measurementId: "G-X134GDXQGF"
  };
  
   // Initialize Firebase
  
   export const app = initializeApp(firebaseConfig);
   export  const analytics = getAnalytics(app);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   export const storage = getStorage(app);
  
  