import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode
}

const Adminlayout = ({children}:Props) => {
  return (
    <div className='flex  w-full h-screen '>
        <aside className=' w-[400px] h-full bg-black text-white'>side bar</aside>
        <div>{children}</div>
    </div>
  )
}

export default Adminlayout