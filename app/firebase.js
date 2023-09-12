    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
    import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
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
    export const db = getFirestore (app);
    
    export const guardarDocumento = (coleccion, documento) => {
      addDoc (collection (db, coleccion), documento);
    }

    export async function obtenerDocumento (mail,IR) {
      const q = await getDocs (query(collection(db, mail), where('IRJira', '==', IR)));
       //.then(res => console.log (res.docs.map(product => ({id: product.id, ...product.data()}))));
      let resultados = await q.docs.map(product => ({id: product.id, ...product.data()}));
      /*const documentos = await getDocs(collection (db, mail));
      const q = query(documentos, where("IRJira", "==", IR));*/  
      console.log ("erere", resultados);
      if ( resultados.length == 0 ) {
        return (resultados);
      }
        else {
          return (resultados[0].IRJira);
        }
      
    }

    
    
    



    


