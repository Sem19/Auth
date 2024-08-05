import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-7GcPYiOaC20iJXfEh9P8Aua6KNpPOw0",
  authDomain: "test-ca02c.firebaseapp.com",
  projectId: "test-ca02c",
  storageBucket: "test-ca02c.appspot.com",
  messagingSenderId: "299774399110",
  appId: "1:299774399110:web:0655ef551b0a6974af7707",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
