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

const UserDetailPage =async ({params:{id}}:Props) => {
    //fetching 
 const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 const user :User = await res.json()
  return (
   <ul>
    <li>{user.name}</li>
    <li>{user.email}</li>
    <li>{user.phone}</li>
   </ul>
  )
}

export default UserDetailPage