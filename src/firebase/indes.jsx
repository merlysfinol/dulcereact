import firebase from 'firebase/app'
import '@firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const app = firebase.initializeApp( {
    apiKey: "AIzaSyDmD_0oCVKRFd7ohornC01GtT0JigC6Y-E",
    authDomain: "dulcefusion-1bd23.firebaseapp.com",
    projectId: "dulcefusion-1bd23",
    storageBucket: "dulcefusion-1bd23.appspot.com",
    messagingSenderId: "1067469356861",
    appId: "1:1067469356861:web:19720ba7dbc9421edf4f54",
    measurementId: "G-18KSWT0V3K"
  });
  // Initialize Firebase
 
  //firebase.analytics();

  export const getFirebase = () => {
      return app
  }
/** Crea la conexion con el servicio de Firestore */
  export const getFirestore = () => {
      return firebase.firestore(app)
  }