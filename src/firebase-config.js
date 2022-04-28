// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4_RrAblf7YWQJpTxHqJEzuMfu-1OVvYU",
    authDomain: "vipnumber-4c0f6.firebaseapp.com",
    projectId: "vipnumber-4c0f6",
    storageBucket: "vipnumber-4c0f6.appspot.com",
    messagingSenderId: "218854233359",
    appId: "1:218854233359:web:8ebdaf95a86e163c71da7a",
    measurementId: "G-SN1TJS2NE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);