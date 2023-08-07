import React from 'react'
import { ComponentF } from './ComponentF'
import { useContext } from 'react'
import { UserContext,UserCompanyContext } from '../App'

export const ComponentE = () => {
   const user=useContext(UserContext)
   const company=useContext(UserCompanyContext)
    return (
        <div>
            <ComponentF/>
            {user}-{company}
        </div>
    )
}
