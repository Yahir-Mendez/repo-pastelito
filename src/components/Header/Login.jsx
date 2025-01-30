import React, { useEffect } from "react";
import { loginWidthCustomToken, observarAuthState } from "../../firebase/auth";

const Login =()=>{
    useEffect(()=>{
        observarAuthState();
    },[]);
    
    const handleLogin = () =>{
        const token = "06ObBAs7fdN6pizzhrQS6vAGBiK2";
        loginWidthCustomToken(token);
    };
    return(
        <div>
            <button onClick={handleLogin}>Iniciar Sesion</button>
        </div>
    );
}