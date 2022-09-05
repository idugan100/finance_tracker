import {projectFirestore,timeStamp} from '../firebase/config'
import { useReducer,useEffect,useState } from 'react'

const initialState={
    document:null,
    isPending:false,
    error:null,
    success:null
}
//reducer to be exported
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
    //wrapper function for checking isCancelled
    const dispatchIfNotCancelled=(action)=>{
        if(!isCancelled){
            dispatch(action)
        }
    }
    //add a document
    const addDocument=async(document)=>{
        
        dispatch({type:'IS_PENDING'})
        try{
            const createdAt=timeStamp.fromDate(new Date());
            const addedDocument=await ref.add({...document,createdAt});
            dispatchIfNotCancelled({type:'ADDED_DOCUMENT',payload:addedDocument})
        }catch(err){
            dispatchIfNotCancelled({type:'ERROR',payload:err.message})
        }
        
    }
    //delete a document
    const deleteDocument=async(id)=>{

    }
    //cleanup function so state is not modified if page is no longer loaded
    useEffect(()=>{
        return ()=>{setIsCancelled(true)}
    },[])
    //returns utility functions and the response for the component to add and delete 
    return{addDocument,deleteDocument,response}


}