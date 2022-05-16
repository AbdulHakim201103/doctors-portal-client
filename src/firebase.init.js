// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyBJgC1ztEAg2i7E37Q4U8GnhX5PSPAaEU0",
    authDomain: "doctors-portal-client-b62fb.firebaseapp.com",
    projectId: "doctors-portal-client-b62fb",
    storageBucket: "doctors-portal-client-b62fb.appspot.com",
    messagingSenderId: "617101167184",
    appId: "1:617101167184:web:67078f24e3dfb611341f55"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
