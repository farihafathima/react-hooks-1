import React, { useEffect } from 'react'
import { useState } from 'react'

export const HookCounter11 = () => {
   const[count,setCount]= useState(0)
   const [name,setName]=useState('')
   useEffect(
    ()=>{
        console.log('UseEffect - Updating document Title')
        document.title=`You Clicked ${count} times`
    },
    [count]
   )
    return (
        <div>
            <input type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}
