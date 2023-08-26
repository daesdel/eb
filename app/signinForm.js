import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'


const signInForm = document.querySelector('#login-form')
signInForm.addEventListener('submit', async e => {
    e.preventDefault()
    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;
    console.log(email,password)
    try {
        const credentials = await signInWithEmailAndPassword (auth, email, password)
        console.log(credentials)
        const signInModal = document.querySelector('#signinModal')
        const modal = bootstrap.Modal.getInstance(signinModal)
        modal.hide()

        showMessage ("Logueado " + credentials.user.email)
        
        // Guardar el correo electrónico en una cookie
        document.cookie = `loggedInUserEmail=${email}`;
            
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