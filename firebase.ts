import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoGOI9G5-z74Jeul_aUnRaszHu7_AKTNc",
  authDomain: "chatgpt-clone-yt-5e37c.firebaseapp.com",
  projectId: "chatgpt-clone-yt-5e37c",
  storageBucket: "chatgpt-clone-yt-5e37c.appspot.com",
  messagingSenderId: "1086062783369",
  appId: "1:1086062783369:web:b47e9917b5c2c3b9f48f58",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
