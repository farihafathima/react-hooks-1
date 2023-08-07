import React from 'react'
import { useReducer } from 'react'
let initialState=0

const reducer= (state,action)=>{
    switch(action){
        case 'increment':
            return (state+1)
        case 'decrement':
            return (state+2)
        case 'reset':
            return initialState
        default:
                return state
    }}

export const Counter3 = ()=>{
    const[count,dispatch]=useReducer(reducer,initialState)
    const[count2,dispatch2]=useReducer(reducer,initialState)
    return (
        <div>
            <div>
            count-{count}
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
        <div>
            count-{count2}
            <button onClick={()=>dispatch2('increment')}>Increment</button>
            <button onClick={()=>dispatch2('decrement')}>Decrement</button>
            <button onClick={()=>dispatch2('reset')}>Reset</button>
        </div>
        </div>
    )
}
