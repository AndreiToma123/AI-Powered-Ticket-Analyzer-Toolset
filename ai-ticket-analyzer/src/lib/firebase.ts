import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQAgmsMiyKQk8YW_QvkdVYXebhkpTNB3A",
  authDomain: "ai-customer-support-agen-5970c.firebaseapp.com",
  projectId: "ai-customer-support-agen-5970c",
  storageBucket: "ai-customer-support-agen-5970c.firebasestorage.app",
  messagingSenderId: "64527408088",
  appId: "1:64527408088:web:d356209e9f73a1830630ad",
  measurementId: "G-LRZRT8Y57P"
};

const app = getApps().length ===0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };