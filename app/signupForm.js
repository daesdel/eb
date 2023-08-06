import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

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

        showMessage ("registro completo " + userCredentials.user.email)

    } catch (error) {
        console.log (error.code)
        // if (error.code === 'auth/email-already-in-use') {
        //     alert ('El usuario ya está registrado')
        // } if (error.code === 'auth/invalid-email') {
        //     alert ('mail incorrecto')
        //   } else if (error.code === 'auth/weak-password') {
        //     alert ('Password demasiado corto')
        //     }
        showMessage (error.code,"error")
        


    }

})