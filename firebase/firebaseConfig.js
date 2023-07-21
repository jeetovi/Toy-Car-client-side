// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXAH9F9F_LXbEN-qsSUxhVnrfgt4mdJME",
  authDomain: "toy-car-client-side.firebaseapp.com",
  projectId: "toy-car-client-side",
  storageBucket: "toy-car-client-side.appspot.com",
  messagingSenderId: "665235725735",
  appId: "1:665235725735:web:15e6571f7e6c902840ea82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;