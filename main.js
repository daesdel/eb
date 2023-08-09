import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from './app/firebase.js'
import { loginCheck } from "./app/loginCheck.js";

import './app/signupForm.js'
import './app/signinForm.js'
import './app/logout.js'

const usuarioLogeado = document.querySelector('#usuarioLogeado')

onAuthStateChanged (auth, async (user) => {
  loginCheck(user)
  if (user) {
    usuarioLogeado.innerHTML = user.email
    console.log(usuarioLogeado.innerHTML)
    
  } else{
    
  }

})