import { projectFirestore } from "../firebase/config"
import { useEffect,useState } from "react"

export const useCollection=(collection)=>{
    const [documents,setDocuments]=useState(null);
    const [error,setError]=useState(null);
     
    useEffect(()=>{
        let ref=projectFirestore.collection(collection);
        const usub=ref.onSnapshot((snapshot)=>{ 
            let results=[];
            snapshot.docs.forEach((doc=>{results.push({...doc.data(),id:doc.id})
            }))

            setDocuments(results);
            setError(null);
        },(error)=>{setError(error.message)})
        return ()=>usub()
    },[collection])

    return {documents,error}

}