
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDNhhdiHXq0z1Srm0WqNAPFpmfhhME63H4",
    authDomain: "login-singup-e5575.firebaseapp.com",
    projectId: "login-singup-e5575",
    storageBucket: "login-singup-e5575.appspot.com",
    messagingSenderId: "740930804237",
    appId: "1:740930804237:web:2be23b2df1aa076dd2d344"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export{auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged }
