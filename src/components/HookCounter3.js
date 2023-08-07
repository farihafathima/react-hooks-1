import React, { useState } from 'react'

export const HookCounter3 = () => {
   const[name,setName]= useState({
        firstName:'',
        lastName:''

    })
    return (
        <div>
            <form>
                <input type='text' value={name.firstName}
                onChange={e=>setName({...name,firstname:e.target.value})}/>
                <input type='text' value={name.lastName}
                onChange={e=>{setName({...name,lastName:e.target.value})}}/>
                <h2>Your First Nmae is:{name.firstName}</h2>
                <h2>Your First Nmae is:{name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}
//useState does not automatically merge and update the 
//this is the key difference to set stae which you come across in class components
//setState will merge the state where as useState Hook setter function will not 
//merge the state .You have to do it manually,Use spread operator to handle manual merge.
//it wil;l copy every property every name object and then just iverride first name feild with a different value