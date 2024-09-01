// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBljfZsZ3rywsf7hRoK0IKZY3kV4wFLptw",
  authDomain: "project-environment-b6316.firebaseapp.com",
  projectId: "project-environment-b6316",
  storageBucket: "project-environment-b6316.appspot.com",
  messagingSenderId: "519982771164",
  appId: "1:519982771164:web:e01be5dd4f38d2148c3d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);