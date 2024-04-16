
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO7W5UeP09aY9jr6Oo_bBKC3tUbOhKnU0",
  authDomain: "meeting-scheduling-6cbbb.firebaseapp.com",
  projectId: "meeting-scheduling-6cbbb",
  storageBucket: "meeting-scheduling-6cbbb.appspot.com",
  messagingSenderId: "691782274867",
  appId: "1:691782274867:web:52e6aff8543eba0cec7846",
  measurementId: "G-LVC8XXQB4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;