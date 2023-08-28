import { showMessage } from './showMessage.js';
import { guardarDocumento } from './firebase.js';


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

// Obtener el correo electrónico almacenado en la cookie
const loggedInUserEmail = getCookie('loggedInUserEmail');
// Obtener IRJIRA alacenado en la coockie
const IRJira = getCookie('IRJira');



const button = document.getElementById("button-VendorE");
button.addEventListener('click', async () => {
    await showForm();
    console.log('FORMULARIO MOSTRADO');
    console.log(loggedInUserEmail);
});

function showForm() {
    // Mostrar el formulario
    document.getElementById("form-actaE").style.display = "block";
    console.log('FORMULARIO ACTIVO');
}

const form = document.querySelector('#form-actaE');
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtener los valores de los campos de texto
    //const coleccion = document.querySelector('#usuarioLogeado');
    
    const documento = {
        escenario: form['escenario'].value,
        IRJira: IRJira,
        CodSite: form['CodSite'].value
      };
    //const escenario = form['escenario'].value;
    //const IRJira = form['IRJira'].value;
    //const CodSite = form['CodSite'].value;

    guardarDocumento (loggedInUserEmail,documento);

    // Enviar los valores de los campos de texto a la consola
    console.log("Enviado: ", IRJira);

    // Mostrar el cuadro emergente 
    showMessage ("Acta enviada " + IRJira, "success");
    form.reset();
});
