import {projectFirestore} from '../firebase/config'
import { useReducer,useEffect,useState } from 'react'

const initialState={
    document:null,
    isPending:false,
    error:null,
    success:null
}

const firestoreReducer=(state,action)=>{
    switch(action.type){
        case 'IS_PENDING':
            return {document:null, success:false,error:null,isPending:true}
        case 'ADDED_DOCUMENT':
            return {err:null,isPending:false,document:action.payload,success:true}
        case 'ERROR':
            return{isPending:false, document:null, sucess:false, error:action.payload}
        default:
            return state
    }

}
export const useFirestore=(collection)=>{
    const [response,dispatch]=useReducer(firestoreReducer,initialState);
    const [isCancelled,setIsCancelled]=useState(false);
    const ref=projectFirestore.collection(collection);

    const dispatchIfNotCancelled=(action)=>{
        if(!isCancelled){
            dispatch(action)
        }
    }

    const addDocument=async(document)=>{
        dispatch({type:'IS_PENDING'})
        try{
            const addedDocument=await ref.add(document);
            dispatchIfNotCancelled({type:'ADDED_DOCUMENT',payload:addedDocument})
        }catch(err){
            dispatchIfNotCancelled({type:'ERROR',payload:err.message})
        }
    }

    const deleteDocument=async(id)=>{

    }
    useEffect(()=>{
        return ()=>{setIsCancelled(true)}
    },[])

    return{addDocument,deleteDocument,response}


}