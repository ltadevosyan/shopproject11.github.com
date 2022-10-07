// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwyZcAi7OwqF63nCRZfWE7IZNcBdEwRyk",
  authDomain: "shop-f6c12.firebaseapp.com",
  projectId: "shop-f6c12",
  storageBucket: "shop-f6c12.appspot.com",
  messagingSenderId: "41882213801",
  appId: "1:41882213801:web:ccbce2d977412b4114f8b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db};