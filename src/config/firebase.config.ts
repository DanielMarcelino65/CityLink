// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqZd96fu0OekladmPOiU5nAXZHARPHORA",
  authDomain: "app-iot-1e3c8.firebaseapp.com",
  projectId: "app-iot-1e3c8",
  storageBucket: "app-iot-1e3c8.appspot.com",
  messagingSenderId: "517866897703",
  appId: "1:517866897703:web:08c699b6ca5589f3032902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;