// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAaB1VCr2QCicUXx2ZxO99Ltrq7e5kAys",
  authDomain: "the-news-dragon-b9e25.firebaseapp.com",
  projectId: "the-news-dragon-b9e25",
  storageBucket: "the-news-dragon-b9e25.appspot.com",
  messagingSenderId: "208587856062",
  appId: "1:208587856062:web:d6a5924045e0d3704be6ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;