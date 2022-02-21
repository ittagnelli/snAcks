// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaV0qTUzXQJzlD21vkTz88MUL1XxNt9qE",
  authDomain: "prova-governativa.firebaseapp.com",
  projectId: "prova-governativa",
  storageBucket: "prova-governativa.appspot.com",
  messagingSenderId: "1087579451700",
  appId: "1:1087579451700:web:f6745321ca2eb1cceb3561"
};

// Initialize Firebase
export const firestore_app = initializeApp(firebaseConfig);
