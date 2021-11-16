// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQCiQqpgtyrG-pO_LzS7CXRee1-DcPm9E",
  authDomain: "developondemand-73ac7.firebaseapp.com",
  projectId: "developondemand-73ac7",
  storageBucket: "developondemand-73ac7.appspot.com",
  messagingSenderId: "842386895355",
  appId: "1:842386895355:web:afe164b2073f08e9549b5e",
  measurementId: "G-96NYCVFQYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);