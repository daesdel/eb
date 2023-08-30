//import { obtenerDocumento } from './firebase.js';
//import { showMessage } from './showMessage.js';

function submitFormIrJira(target) {
    var IRJiraValue = document.getElementById('IRJira').value;
    // Obtener el correo electrónico almacenado en la cookie
    const loggedInUserEmail = getCookie('loggedInUserEmail');
    // Buscar documentos con IRJira y usuario
    console.log(loggedInUserEmail,IRJiraValue)   
    const documentos = obtenerDocumento (loggedInUserEmail,IRJiraValue); 
    console.log(documentos)
    showMessage ("Doc "+documentos, "error");

    if (IRJiraValue !== '') {
      window.location.href = target;
      // Guardar el codigo IR JIRA en una cookie
      document.cookie = `IRJira=${IRJiraValue}`;
    } else {
      showMessage ("Debes rellenar el campo IRJIRA antes de continuar.", "error");
    }
  }