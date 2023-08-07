import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../App'

export const ComponentD = () => {
    const countContext=useContext(CountContext)
    return (
        <div>
            
            ComponentD-{countContext.countState}
            <button onClick={()=>countContext.countDispatch("increment")}>increment</button>
            <button onClick={()=>countContext.countDispatch("decrement")}>decrement</button>
            <button onClick={()=>countContext.countDispatch("reset")}>reset</button>
            
        </div>
    )
}
