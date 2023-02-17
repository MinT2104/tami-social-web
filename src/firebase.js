// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoeOzMZ06YV5pyER0eVSDsoDQMfIBEcOk",
  authDomain: "social-tami.firebaseapp.com",
  projectId: "social-tami",
  storageBucket: "social-tami.appspot.com",
  messagingSenderId: "54022228638",
  appId: "1:54022228638:web:1999bba842c8b8f470c98f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ;
// console.log(auth)
// export const db = getFirestore(app);


