// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuLYPW334rMj3OJn4LgcC74MQ6Za-c9nc",
  authDomain: "doctors-portal-22dc7.firebaseapp.com",
  projectId: "doctors-portal-22dc7",
  storageBucket: "doctors-portal-22dc7.appspot.com",
  messagingSenderId: "628928288157",
  appId: "1:628928288157:web:929a7f4c0c7456156f0b74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
