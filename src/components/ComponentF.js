import React from 'react'
import { UserCompanyContext, UserContext } from '../App'
import { useContext } from 'react'
import { CountContext } from '../App'

export const ComponentF = () => {
    const countContext=useContext(CountContext)
    return (
        <div>

            ComponentF-{countContext.countState}
            <button onClick={()=>countContext.countDispatch("increment")}>increment</button>
            <button onClick={()=>countContext.countDispatch("decrement")}>decrement</button>
            <button onClick={()=>countContext.countDispatch("reset")}>reset</button>
            {/* <UserContext.Consumer>
            {
                user=>{return(
                    <UserCompanyContext.Consumer>
                        {
                            company=><div>User Context Value {user},
                            Company Context Value {company}</div>
                        }
                    </UserCompanyContext.Consumer>
                )}
            }
            </UserContext.Consumer> */}
           
        </div>
    )
}
