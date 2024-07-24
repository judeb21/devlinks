// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr5zFpfob_JYo2mqIPUMhMmPH9RqUfnqo",
  authDomain: "devlinks-6f469.firebaseapp.com",
  projectId: "devlinks-6f469",
  storageBucket: "devlinks-6f469.appspot.com",
  messagingSenderId: "1047309702862",
  appId: "1:1047309702862:web:f4707ea853fc689569629f",
  measurementId: "G-L1TSN9WJRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);