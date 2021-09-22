import React,{useContext} from 'react'
import  {GlobalData}  from '../context/GlobalContext'
import Transaction from './Transaction'
export default function History() {
    
    const {transactions}=useContext(GlobalData)
    // console.log(transactions)
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className='list'>
        
            {transactions.map(transaction=>
            
                
                    <Transaction key={transaction.id} transaction={{detail:transaction.detail,amount:transaction.amount}} />
                
            
             
            )}
       
            </ul>
            
         </div>
            )
            }
