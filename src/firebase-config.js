import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDKM2-RcTPSKl7ctKqo2hFFW7CoiTnr_co",
  authDomain: "auth-developement-372e2.firebaseapp.com",
  projectId: "auth-developement-372e2",
  storageBucket: "auth-developement-372e2.appspot.com",
  messagingSenderId: "1062211293831",
  appId: "1:1062211293831:web:6c83a3a3e92d88c45d5e22"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);