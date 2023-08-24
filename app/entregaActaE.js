import { showMessage } from './showMessage.js';
import { guardarDocumento } from './firebase.js'

const button = document.getElementById("button-actaE");
button.addEventListener('click', async () => {
    await showForm();
    console.log('FORMULARIO MOSTRADO');
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
    const escenario = form['escenario'].value;
    const IRJira = form['IRJira'].value;
    const CodSite = form['CodSite'].value;

    guardarDocumento ("Acta",IRJira,CodSite,escenario)

    // Enviar los valores de los campos de texto a la consola
    console.log("Enviado:", escenario, "  ", IRJira);

    // Mostrar el cuadro emergente 
    showMessage ("Acta enviada " + IRJira, "success");
    form.reset()
});
