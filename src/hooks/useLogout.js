import { useState } from "react"
import {projectAuth} from '../firebase/config'
import { useAuthContext } from "./useAuthContext"
export const useLogout=()=>{
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
            setIsPending(false);
            setError(null);

        }catch(err){
            setError(err.message);
            console.log(err.message);
            setIsPending(false);
        }

    }
    return({error, isPending,logout})

}