import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB50accHsOV7xTCuosW2J2qYQujELLWH44",
  authDomain: "shoppers-yt.firebaseapp.com",
  projectId: "shoppers-yt",
  storageBucket: "shoppers-yt.firebasestorage.app",
  messagingSenderId: "751659141865",
  appId: "1:751659141865:web:197e286ec05694e4653e78",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
