import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3bUe57iBmRllbCCp0RSGm326TVotIHxs",
  authDomain: "web-chat-app-bce00.firebaseapp.com",
  projectId: "web-chat-app-bce00",
  storageBucket: "web-chat-app-bce00.appspot.com",
  messagingSenderId: "917332080976",
  appId: "1:917332080976:web:07f09507b3e94ecc1a1455",
};
const firebase = initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();

export default { firebase, firebaseConfig };
