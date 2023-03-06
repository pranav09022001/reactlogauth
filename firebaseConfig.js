import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



  const firebaseConfig = {
    apiKey: "AIzaSyA6qd7MUsqTwabrdAXt92ins26aaI01t-A",
    authDomain: "react-login-54118.firebaseapp.com",
    projectId: "react-login-54118",
    storageBucket: "react-login-54118.appspot.com",
    messagingSenderId: "491148886161",
    appId: "1:491148886161:web:4f2349240af66521bfbf30"
  };
  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);