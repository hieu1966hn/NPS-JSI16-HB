import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKHY4NSQNQ6FvoJvFgmkEzEi5V5BbisbA",
  authDomain: "nps-jsi160-hb.firebaseapp.com",
  projectId: "nps-jsi160-hb",
  storageBucket: "nps-jsi160-hb.appspot.com",
  messagingSenderId: "1093128105411",
  appId: "1:1093128105411:web:f54514435789a0b2e76176",
  measurementId: "G-51JX6Q8VYF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
