import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const DataFetching1 = () => {
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')
    const[posts,setposts]=useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            setLoading(false)
            setposts(response.data)
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setposts({})
            setError('Something went wrong!')
        })
    },[])
    return (
        <div>
            {loading?'Loading':posts.title}
            {error?error:null}
        </div>
    )
}
