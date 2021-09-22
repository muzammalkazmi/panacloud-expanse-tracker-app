import React,{useContext} from 'react'
import { GlobalData } from '../context/GlobalContext'

export default function AccountSummary() {
    const {transactions}=useContext(GlobalData);
    const transactionAmount=transactions.map(transaction=>
        transaction.amount);
        console.log(transactionAmount)
        const income=transactionAmount
        .filter(transaction=>transaction>0)
        .reduce((acc,currentEl)=>(acc+=currentEl),0)
        console.log(income)
        
        const expanse=transactionAmount
            .filter(transaction=>transaction<0)
            .reduce((acc,currentEl)=>(acc+=currentEl),0)
           
            console.log(expanse);
        
        
    
    return (
        <div className='income-expanse-container'>
            <div className='income-container'> 
        <h3>Income</h3>
        <h2>$ {income}</h2>
            </div>
            <div>
            <h3>Expanse</h3>
        <h2>$ {expanse}</h2>
            </div>
         
            </div>
        
    )
}
