import { createContext, useContext } from "react";
import{ createUserWithEmailAndPassword } from 'firebase/auth' 
import { auth, db } from "../Components/Firebase";
import {setDoc, doc} from 'firebase/firestore'



const UserContext=createContext()

export const AuthContextProvider=({children})=>{

    const createUser =(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db,'user', email),{
            savedShows:[]
        })

    }

    return(
        <UserContext.Provider value={{createUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(UserContext)
}