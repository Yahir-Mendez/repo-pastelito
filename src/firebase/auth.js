import { getAuth, onAuthStateChanged, signInWithCustomToken } from "firebase/auth";
import { app } from "./firebaseconfig";

const auth = getAuth();

export const loginWidthCustomToken = (token) =>{
    signInWithCustomToken(auth,token)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log("Ususario Autenticado");
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error de autenticacion: "+ errorCode, errorMessage);
        })
}

// observador
export const observarAuthState = () =>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            const uid = user.uid;
            console.log("usuario autenticado: ", uid);
        }else{
            console.log("NO hay usuario autenticado");
        }
    })
}