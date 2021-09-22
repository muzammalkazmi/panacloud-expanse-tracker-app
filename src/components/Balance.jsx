import React,{useContext} from 'react'
import { GlobalData } from '../context/GlobalContext'

export default function Balance() {
    const {transactions}=useContext(GlobalData)
    const transactionValue=transactions.map(transaction=>transaction.amount)
    const updatedBalance=transactionValue.reduce((acc,el)=>(acc+=el),0).toFixed(2)
    const transactionColor=updatedBalance>0?'plus':'minus'
    console.log(transactionValue)
    return (
        <div className='balance' >
            <h3>Current Balance</h3>
            <h1 className={transactionColor}>$ {updatedBalance}</h1><hr/>
        </div>
    )
}
