    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCxltcLjC6IpF0cC74g8zI570Q3miaFbyQ",
      authDomain: "todo-b5800.firebaseapp.com",
      projectId: "todo-b5800",
      storageBucket: "todo-b5800.appspot.com",
      messagingSenderId: "224494523333",
      appId: "1:224494523333:web:0b36dd4fcd4604711271ac"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth (app);
    export const firestore = getFirestore (app)
