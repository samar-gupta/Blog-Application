// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlRROb7gCvCdv8-SwskCH3SYmjZBbCwlo",
  authDomain: "myblog-25b95.firebaseapp.com",
  projectId: "myblog-25b95",
  storageBucket: "myblog-25b95.appspot.com",
  messagingSenderId: "855619301454",
  appId: "1:855619301454:web:7da3f81dea913d8950131f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}