import React from 'react'

export default function Transaction({ transaction }) {
    return ( 
    <div >
        <li > { transaction.detail } < span > { transaction.amount } </span> 
        </li> 
        </div>
    )
}