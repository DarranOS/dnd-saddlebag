// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSspz0AA7uwRnY1JyX2J6_3HrpiOEF5mo',
  authDomain: 'dnd-saddlbag.firebaseapp.com',
  projectId: 'dnd-saddlbag',
  storageBucket: 'dnd-saddlbag.appspot.com',
  messagingSenderId: '1003920474951',
  appId: '1:1003920474951:web:c555af108ce705d4454262',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
