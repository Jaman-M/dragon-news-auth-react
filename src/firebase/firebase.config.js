// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeiNd7ri6Z5jV7dfLf2NWDjOC7Gd6TMuY",
  authDomain: "dragon-news-auth-react-b1ce6.firebaseapp.com",
  projectId: "dragon-news-auth-react-b1ce6",
  storageBucket: "dragon-news-auth-react-b1ce6.appspot.com",
  messagingSenderId: "447836301362",
  appId: "1:447836301362:web:d9a394bd6faa909faab42b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;