import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore";
import {useAuthContext} from "../../hooks/useAuthContext"

export default function TransactionForm({uid}) {
    const {addDocument,response}=useFirestore('transactions');
    const [name,setName]=useState('');
    const [amount,setAmount]=useState('');
    //add firestore document whe submited
    const handleSubmit=(e)=>{  
        e.preventDefault();
        addDocument({name,amount,uid});
    }
    //clear form if addition is sucessful
    useEffect(()=>{
        if(response.success){
            setName('');
            setAmount('');
        }
    },[response.success])
  return (
    <>
        <h3>Add a Transaction</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Transaction Name</span>
                <input 
                    type="text" 
                    required
                    onChange={(e)=>{setName(e.target.value)}}
                    value={name}
                />
            </label>
            <label>
                <span>Amount </span>
                <input 
                    type="number" 
                    required
                    onChange={(e)=>{setAmount(e.target.value)}}
                    value={amount}
                />
            </label>
            <button>Add Transaction</button>
        </form>
    </>
  )
}
