import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext=()=>{
    const context=useContext(AuthContext);
    if(!context){
        throw Error('use authcontext must be inside an auth constext provider')
    }
    return context;
}