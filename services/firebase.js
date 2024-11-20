// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxxuZo8QNap1xhkazG2Ixd5YcoQ1Zmjxs",
    authDomain: "react-native-auth-demo-af947.firebaseapp.com",
    projectId: "react-native-auth-demo-af947",
    storageBucket: "react-native-auth-demo-af947.firebasestorage.app",
    messagingSenderId: "724044393870",
    appId: "1:724044393870:web:035c04b627e59c35ed48df"
};

let auth;

if (getApps().length == 0) {

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    })
} else {
    auth = getAuth();
}



export default auth;