import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2S2MZloFvyrW9uMjXAhPW6g5--F8b2VQ",
    authDomain: "muscle-maniacs.firebaseapp.com",
    projectId: "muscle-maniacs",
    storageBucket: "muscle-maniacs.appspot.com",
    messagingSenderId: "941647314856",
    appId: "1:941647314856:web:87b05544b3f787857d279d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;