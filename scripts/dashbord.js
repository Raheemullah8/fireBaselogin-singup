import { auth, onAuthStateChanged,signOut } from "./firebase.js";
const emailvalid = document.getElementById('emailid');
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user)
      emailvalid.innerText = user.email;
      // ...
    } else {
        window.location = "../pages/singup.html"
    console.log("User is signed out")
    }
  });

const logbtn = document.querySelector('#logout');

logbtn.addEventListener('click',()=>{
  try {
   signOut(auth)
    window.location = '../pages/login.html';
  } catch (error) {
    console.log('error',error.message)
  }
})