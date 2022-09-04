import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext"

export const useLogin=()=>{
    const {dispatch}=useAuthContext();
    const [error,setError]=useState(null);
    const [isPending,setIsPending]=useState(false);
    const [isCancelled,setIsCancelled]=useState(false);

    const login=async(email,password)=>{
        setError(null);
        setIsPending(true);
        try{
            const response=await projectAuth.signInWithEmailAndPassword(email,password);
            if(!response){
                throw new Error('Could not complete signin')
            }
            dispatch({type:'LOGIN',payload:response.user})
            if(!isCancelled){
                setError(null);
                setIsPending(false);
            }
        }catch(error){
            if(!isCancelled){
                setError(null);
                setIsPending(false);
            }
        }

    }

    useEffect(()=>{
        return ()=>setIsCancelled(true)
    },[])
    return {error,isPending,login}
}