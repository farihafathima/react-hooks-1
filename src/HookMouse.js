import React, { useEffect, useState } from 'react'

export const HookMouse = () => {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);

    const logMousePosition = e => {
        console.log('mouse event');
        setX(e.clientX);
        setY(e.clientY);
      };
          
      

    useEffect(()=>{
        console.log('useeffect-called')
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log('Component')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
            Hooks X-{x} Y-{y}
        </div>
    )
}
