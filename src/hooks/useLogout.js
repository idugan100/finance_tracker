import { useState, useEffect } from "react"
import {projectAuth} from '../firebase/config'
import { useAuthContext } from "./useAuthContext"
export const useLogout=()=>{
    const [isCancelled,setIsCancelled]=useState(false);
    const {dispatch}=useAuthContext();
    const [error, setError]=useState(null);
    const [isPending, setIsPending]=useState(false);
    const logout=async()=>{
        setError(null);
        setIsPending(true);
        //sign user out
        try{
            await projectAuth.signOut();
            //send logout to context
            dispatch({type:'LOGOUT'})
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }

        }catch(err){
            if(!isCancelled){
                setError(err.message);
                console.log(err.message);
                setIsPending(false);
                }
        }

    }
    useEffect(()=>{
        return ()=>setIsCancelled(true)
    },[])
    return({error, isPending,logout})

}