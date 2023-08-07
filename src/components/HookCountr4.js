import React from 'react'
import { useState } from 'react'

export const HookCountr4 = () => {
    const [items,setItems]=useState([])
    const addItem=()=>setItems([...items,{
        id:items.length,
        //random numbers between 1 to 10
        value:Math.floor(Math.random()*10)+1
    }])
    return (
        <div>
            <button onClick={addItem}>Add a number to the Array</button>
            <ul>
                {
                    items.map(item=>(<li>{item.value}</li>))
                }
            </ul>
        </div>
    )
}
