// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBk128gXzlTQZ4cAygvZUERW8MQwR_cKW4",
    authDomain: "edison-project-e22dc.firebaseapp.com",
    projectId: "edison-project-e22dc",
    storageBucket: "edison-project-e22dc.appspot.com",
    messagingSenderId: "580533009439",
    appId: "1:580533009439:web:1a7c38a5d2280ac905692a",
    measurementId: "G-0CPGWKLGFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Init Services
export const db = getFirestore(app);