// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvsExH9RelKF1lxNDcoS1zE0o2J0ritys",
  authDomain: "treat-cafe-auth.firebaseapp.com",
  projectId: "treat-cafe-auth",
  storageBucket: "treat-cafe-auth.appspot.com",
  messagingSenderId: "254167425736",
  appId: "1:254167425736:web:32441f67c8caebcfcc7bfd"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;