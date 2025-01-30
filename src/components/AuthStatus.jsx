import { useEffect, useState} from "react";
import { app } from "../firebase/firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthStatus = () =>{
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
    return()=>unsubscribe();
    },[]);

    const handleSignOut = () =>{
        try{
            signOut(auth);
            alert("Sesion cerrada");
        }catch(error){
            console.error("NO se pudo cerrar sesion: ",error.message);
        }
    }
    return (
        <div>
            {
                user ? `Bienvendido, ${user.email}` : "No hay usuario autenticado"
            }
            {
                user ? <button onClick={handleSignOut}>Cerrar Sesion</button> : ""
            }
        </div>
    )
}