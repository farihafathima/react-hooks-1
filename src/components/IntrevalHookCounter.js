import React, { useEffect } from 'react'
import { useState,someProps } from 'react'

export const IntrevalHookCounter = () => {
    const[count,setCount]=useState(0)


    useEffect(()=>{
      
        function doSomething(){
            console.log(someProps)
        }
        doSomething()
        const interval=setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[someProps])
   
    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
    return (
        <div>
            {count}
        </div>
    )
}
