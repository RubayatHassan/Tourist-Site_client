// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUYysGlel-Dhs8zF9vON6O8r09yWhEsos",
  authDomain: "authentication-website-6684c.firebaseapp.com",
  projectId: "authentication-website-6684c",
  storageBucket: "authentication-website-6684c.appspot.com",
  messagingSenderId: "798748580460",
  appId: "1:798748580460:web:849fb1e84aef6f21129649",
  measurementId: "G-MSP4M1JPBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;