import React, { useState,useEffect } from 'react'
import axios from 'axios'

export const DataFetching = () => {
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[idfrombutton,setIdFromButton]=useState(1)
    const[error,setError]=useState('')


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log(response)
            setPost(response.data)
        })
        .catch(err=>{
            console.log(err)
            setError(err)
        })
    },[idfrombutton])
    const HandleClick=()=>{
        setIdFromButton(id)
    }
    return (
        <div>
            <input type="test" value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={HandleClick}>Fetch posts</button>
            <div>
            {post.title}
            </div>
            {/* List of posts
            <ul>
               {posts.length?posts.map(post=>(<li key={post.id}>{post.title}</li>)):null}
               {
                error?'something Went wrong':null
               }
            </ul> */}

        </div>
    )
}
