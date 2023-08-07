import React from 'react'
import { useState } from 'react'

export const HookCounter2 = () => {
    const[count,setCount]=useState(0)
   const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
            count:{count}
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementFive}>IncrementFive</button>
        </div>
    )
}
