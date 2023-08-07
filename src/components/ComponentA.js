import React, { useContext } from 'react'
import { UserContext } from '../App'
import { CountContext } from '../App'

export const ComponentA = () => {
    const countContext=useContext(CountContext)
    return (
        <div>
            ComponentA-{countContext.countState}
            <button onClick={()=>countContext.countDispatch("increment")}>increment</button>
            <button onClick={()=>countContext.countDispatch("decrement")}>decrement</button>
            <button onClick={()=>countContext.countDispatch("reset")}>reset</button>
        </div>
    )
}
