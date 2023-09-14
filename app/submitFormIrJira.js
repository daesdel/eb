//import { obtenerDocumento } from './firebase.js';
//import { showMessage } from './showMessage.js';

//import { obtenerDocumento } from "./firebase";

  const form = document.getElementById("IR-form");
  const IRJiraInput = document.getElementById("IRJira");
  // Evitar que el formulario se envíe al presionar Enter en el campo de entrada
  IRJiraInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      showMessage ("Para continuar pulsa el botón. ", "error");              }
  });

async function submitFormIrJira(target) {
    var IRJiraValue = document.getElementById('IRJira').value;
    // Obtener el correo electrónico almacenado en la cookie
    const loggedInUserEmail = getCookie('loggedInUserEmail');
    //Buscar documentos con IRJira y usuario
       
    if (IRJiraValue !== '') {
      const documentos =  await obtenerDocumento (loggedInUserEmail,IRJiraValue);
      if (documentos !== IRJiraValue) {
        window.location.href = target;
      } else {
        console.log("ya existe ",IRJiraValue, "  ", documentos);
        showMessage ("Este IR ya existe. " + documentos, "error");
      }
      // Guardar el codigo IR JIRA en una cookie
      document.cookie = `IRJira=${IRJiraValue}`;
    } else {
      console.log("jira vacio");
      showMessage ("Debes rellenar el campo IRJIRA antes de continuar. ", "error");
    }
  }