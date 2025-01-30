import { useState } from "react"; 
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthStatus } from "./AuthStatus";
export const Login =()=>{
  const auth = getAuth(app);
  const [ email, setEmail ] = useState("");
  const [ password, setPassworrd ] = useState("");

  const handleLogin = async () => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Usuario autenticado: ", userCredential.user);
    }catch(error){
        console.error("Error al iniciar session", error.message);
    }
}

    const handleRegister = async () =>{
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario Registrado: ",userCredential.user);

        }catch(error){
            console.log("Error al registrarce", error.message);
        }
    };

   

    return(
        <>
        <div  className="container">
            <input type="email" placeholder="correo" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="contrasena" onChange={(e)=>setPassworrd(e.target.value)} />
            <button onClick={handleLogin}>Iniciar Sesion</button>
            <button onClick={handleRegister }>Registrarce</button>
        </div>
        
        <AuthStatus/>
        </>
    );
  
}