import { auth ,onAuthStateChanged } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
    if(user){
        window.location = "../pages/dashbord.html"
    }else{
        window.location = "../pages/login.html"
    }
  });