import { projectFirestore } from "../firebase/config"
import { useEffect,useRef,useState } from "react"


export const useCollection=(collection,_query)=>{
    
    const [documents,setDocuments]=useState(null);
    const [error,setError]=useState(null);

    const query=useRef(_query).current
     
    useEffect(()=>{
        let ref=projectFirestore.collection(collection);
        if(query){
            ref=ref.where(...query)
        }
        const usub=ref.onSnapshot((snapshot)=>{ 
            let results=[];
            snapshot.docs.forEach((doc=>{results.push({...doc.data(),id:doc.id})
            }))

            setDocuments(results);
            setError(null);
        },(error)=>{setError(error.message)})
        return ()=>usub()
    },[collection,query])

    return {documents,error}

}