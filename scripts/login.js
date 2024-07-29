import { auth, signInWithEmailAndPassword } from "./firebase.js";

const formID = document.querySelector('#signup-form');
const msgElement = document.querySelector('#msg');

formID.addEventListener('submit', async (event) => {
  event.preventDefault();
  msgElement.innerText = "Loading..." 
  let email = event.target.querySelector('#email').value;
  let password = event.target.querySelector('#password').value;

  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Show success message
    msgElement.textContent = `Login successful! Welcome ${userCredential.user.email}`;
    msgElement.className = 'success'; // Add success class
    window.location = "../pages/dashbord.html"
    
    formID.reset(); // Optionally clear the form
    
  } catch (error) {
    // Show error message
    msgElement.textContent = `Sign up failed: ${error.message}`;
    msgElement.className = 'error'; // Add error class
  }
});
