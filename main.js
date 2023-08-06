import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from './app/firebase.js'
import './app/signupForm.js'
import './app/logout.js'

onAuthStateChanged (auth, async (user) => {
  console.log(user)
})