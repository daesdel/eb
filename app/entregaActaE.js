const button = document.getElementById("button-actaE");
button.addEventListener('click', async () => {
    await showForm()
    console.log ('FORMULARIO MOSTRADO')
    
})
function showForm() {
    // Mostrar el formulario
    document.getElementById("form-actaE").style.display = "block"
    console.log ('FORMULARIO ACTIVO')
}

const form = document.querySelector('#form-actaE')
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener los valores de los campos de texto
  const nombre = form['nombre'].value
  // Enviar los valores de los campos de texto a la consola
  console.log("Enviado:", nombre);
  location.reload();
});