import React,{useState,useContext} from 'react'
import {v4 as uuid4} from 'uuid'
import  {GlobalData}  from '../context/GlobalContext'


export default function AddTransaction() {
    const[newDetail,setNewDetail]=useState('')
    const[newAmount,setNewAmount]=useState(0)
    const {updateTransaction}=useContext(GlobalData)
   const onSubmit=(e)=>{
       e.preventDefault();
    const newTransaction={
        id:uuid4,
        detail:newDetail,
        amount:newAmount
    }
    updateTransaction(newTransaction)
    console.log(newDetail,newAmount)
   } 
  


    return (
        <div>
            <h3>Add Transactions</h3>
            <form onSubmit={onSubmit}>
                <label>Description</label>
                <div>
                <input 
                type='text'
                 placeholder='Enter Description'
                 value={newDetail}
                 onChange={((e)=>setNewDetail(e.target.value))}
                 />
                </div>
                <div>
                <label>Amount</label>
                <div>
                <input type='number' 
                placeholder='Enter Amount'
                value={newAmount}
                onChange={((ev)=>setNewAmount(ev.target.value))}
                />
                </div>
                </div>

               
                <div className='enter'>
                    <button type='submit' id='submit' >Enter</button>
                </div>
            </form>
        </div>
    )
}
