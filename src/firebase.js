import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAza_8PA8SA1AeM0vtddeip8OT_enDGDnE",
  authDomain: "fir-auth-c90f1.firebaseapp.com",
  projectId: "fir-auth-c90f1",
  storageBucket: "fir-auth-c90f1.appspot.com",
  messagingSenderId: "906657675997",
  appId: "1:906657675997:web:8b300bb8265115eeb1b934"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
