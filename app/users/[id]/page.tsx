import Image from 'next/image'
import { notFound } from 'next/navigation'
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

interface Photo{
    thumbnailUrl: string 
}

const UserDetailPage =async ({params:{id}}:Props) => {
    //fetching 
 const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 const user :User = await res.json()

 const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
 const post :Post = await data.json()

 const photodata = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
 const photo :Photo = await photodata.json()
   

  if (id > 10) notFound()

  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-10">
  <Image src={photo.thumbnailUrl} alt='' width={150} height={150}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{post.title}</div>
    <p className="text-gray-700 text-base">
      {post.body}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{user.name}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{user.email}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{user.phone}</span>
  </div>
</div>
    </>
  
   
  )
}

export default UserDetailPage