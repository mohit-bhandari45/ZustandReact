// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCXHkn4oWHZyXuUkrKsnmIACCi_AjVXao",
  authDomain: "auth-1056f.web.app",
  projectId: "auth-1056f",
  storageBucket: "auth-1056f.appspot.com",
  messagingSenderId: "438986282917",
  appId: "1:438986282917:web:94217e53548b1f27a37a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app