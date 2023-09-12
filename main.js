import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"

import { auth, db, obtenerDocumento } from './app/firebase.js'
import { loginCheck } from "./app/loginCheck.js";

import './app/signupForm.js'
import './app/signinForm.js'
import './app/logout.js'

import { showMessage } from './app/showMessage.js';
import { getCookie } from "./app/getCookie.js";


const usuarioLogeado = document.querySelector('#usuarioLogeado');

// Hacer la función showMessage global
window.showMessage = showMessage;
// Hacer la función getCookie global
window.getCookie = getCookie;
// Hacer la función obtenerDocumento global
window.obtenerDocumento = obtenerDocumento;

onAuthStateChanged (auth, async (user) => {
  loginCheck(user);
  var tabla = document.getElementById('tabla');
  
  if (user) {
    usuarioLogeado.innerHTML = user.email;
    const querySnapshot = await getDocs (collection(db,user.email));
    tabla.innerHTML = '';
    querySnapshot.forEach(doc => {
      console.log(doc.data().IRJira);
      tabla.innerHTML += `
      <tr>
        <td>${doc.data().IRJira}</td>
        <td>${doc.data().CodSite}</td>
        <td>${doc.data().escenario}</td>
      </tr>
      `
    });
        
  } else{
    
  }

})