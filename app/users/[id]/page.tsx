import React from 'react'

interface Props{
    params:{id:number}
}

interface User{
    id: number 
    name: string 
    email :string
    phone:string
}

interface Post{
    id: number 
    title: string 
    body :string
   
}

const UserDetailPage =async ({params:{id}}:Props) => {
    //fetching 
 const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 const user :User = await res.json()

 const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
 const post :Post = await data.json()
  return (
    <>
     <ul>
    <li>{user.name}</li>
    <li>{user.email}</li>
    <li>{user.phone}</li>
   </ul>
   <h1>{post.title}</h1>
   <p>{post.body}</p>
    </>
  
   
  )
}

export default UserDetailPage