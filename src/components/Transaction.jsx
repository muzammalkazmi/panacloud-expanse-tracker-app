import React from 'react'

export default function Transaction({ transaction }) {
    const sign= transaction.amount>0?'+':'-';
    const transactionType=transaction.amount>0?'plus':'minus'
    return ( 
    <div className={transactionType}>
        <li > { transaction.detail } < span > ${sign}{ transaction.amount } </span>
         <button type='button'className='dlt-btn'>X</button>
        </li> 
        </div>
    )
}