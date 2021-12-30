import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvCrk_XXSv5fcaG4Cb9SVU1LIhHBTKjaA',
  authDomain: 'uber-next-clone-1bce1.firebaseapp.com',
  projectId: 'uber-next-clone-1bce1',
  storageBucket: 'uber-next-clone-1bce1.appspot.com',
  messagingSenderId: '465069351645',
  appId: '1:465069351645:web:3c26ddc5aa4d8ec5ba3134',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
