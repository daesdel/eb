function submitFormIrJira() {
    var IRJiraValue = document.getElementById('IRJira').value;
    // Obtener el correo electrónico almacenado en la cookie
    const loggedInUserEmail = getCookie('loggedInUserEmail');
    
    console.log("La función se ha cargado correctamente "+loggedInUserEmail);
    if (IRJiraValue !== '') {
      window.location.href = target;
      // Guardar el codigo IR JIRA en una cookie
      document.cookie = `IRJira=${IRJiraValue}`;
    } else {
      showMessage ("Debes rellenar el campo IRJIRA antes de continuar.", "error");
    }
  }