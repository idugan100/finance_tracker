import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext";
export const useSignup=()=>{
    const {dispatch}=useAuthContext();
    const [error,setError]=useState(null);
    const [isPending, setIsPending]=useState(false);
    const signup=async(email, password,userName)=>{
        setError(null);
        setIsPending(true);
        try{
            //sign up user
            const response=await projectAuth.createUserWithEmailAndPassword(email,password)
            
            if(!response){
                throw new Error("Could not complete signup")
            }
            //add display name to user
            await response.user.updateProfile({displayName:userName})
            //dispatch login action for context
            dispatch({type:'LOGIN',payload:response.user})


            setIsPending(false);
            setError(null);


        }catch(err){
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }

    }
    return {error,isPending,signup}


}