import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from './firebase.js'

const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    console.log(email,password)
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

        // Toastity
        Toastify({
            text: "Registro correcto",
            duration: 5000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: 'green', //"linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();



    } catch (error) {
        console.log (error.code)

        if (error.code === 'auth/email-already-in-use') {
            alert ('El usuario ya está registrado')
        } if (error.code === 'auth/invalid-email') {
            alert ('mail incorrecto')
          } else if (error.code === 'auth/weak-password') {
            alert ('Password demasiado corto')
            }
        


    }

})