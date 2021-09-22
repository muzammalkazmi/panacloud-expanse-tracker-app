import React from 'react'

export default function Transaction({ transaction }) {
    return ( 
    <div >
        <li > { transaction.detail } < span > { transaction.amount } </span> <button type='button'className='dlt-btn'>X</button>
        </li> 
        </div>
    )
}