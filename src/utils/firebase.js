// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3A9ONUqiB2n3221risAdOAhcQD6fShqo",
  authDomain: "netflix-gpt-8840e.firebaseapp.com",
  projectId: "netflix-gpt-8840e",
  storageBucket: "netflix-gpt-8840e.appspot.com",
  messagingSenderId: "1041535624781",
  appId: "1:1041535624781:web:02bffe32b6ec4cfeca5e04",
  measurementId: "G-DMRPVQYLX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();