// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBilb9qETbfOP_q9lWwOfNJV7urExWj_Sg",
  authDomain: "echo-coach-ai.firebaseapp.com",
  projectId: "echo-coach-ai",
  storageBucket: "echo-coach-ai.firebasestorage.app",
  messagingSenderId: "179574764914",
  appId: "1:179574764914:web:e5c1f203a4f29b0a7419eb",
  measurementId: "G-GM5BZ27NLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, app, analytics };