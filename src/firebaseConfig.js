// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove,onValue ,set  } from 'firebase/database';
import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBo5BIQLwGZn7QfX61ZAos94KQMr2BsPW4",

  authDomain: "elm7rab-b67de.firebaseapp.com",

  databaseURL: "https://elm7rab-b67de-default-rtdb.firebaseio.com",

  projectId: "elm7rab-b67de",

  storageBucket: "elm7rab-b67de.appspot.com",

  messagingSenderId: "675142249340",

  appId: "1:675142249340:web:d84d63bb1b306543a4d2f9",

  measurementId: "G-X23E71F1Y4"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
export { auth , database, ref, remove,onValue, getStorage, storageRef, deleteObject ,storage,set};