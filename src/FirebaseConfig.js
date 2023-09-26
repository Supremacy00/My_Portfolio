// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn6KcB4tyFXI6ccF4b7Zt854zYrSZ7gak",
  authDomain: "my-portfolio-bae84.firebaseapp.com",
  projectId: "my-portfolio-bae84",
  storageBucket: "my-portfolio-bae84.appspot.com",
  messagingSenderId: "930940769336",
  appId: "1:930940769336:web:078f938d8f85a209d642cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }