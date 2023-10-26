// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlh95XRFC73Pc6d3Ez8ciJLwWb912BivE",
  authDomain: "restaurant-app-b38f4.firebaseapp.com",
  projectId: "restaurant-app-b38f4",
  storageBucket: "restaurant-app-b38f4.appspot.com",
  messagingSenderId: "164127351935",
  appId: "1:164127351935:web:4fd1b15b8fbf13fd678b4a",
  measurementId: "G-TLV3DW30CT"
};

const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app); // Use getAuth to access authentication
const db = getFirestore(app)

export { app, auth,db };