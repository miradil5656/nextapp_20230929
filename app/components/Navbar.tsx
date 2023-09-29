import Link from "next/link"

const Navbar = () => {
  return (
    <div className=' flex justify-center'>
        <div className='flex w-[80%]  justify-between items-center p-4'>
            <h1 className='text-2xl'>Logo</h1>
            <ul className='flex gap-8 text-2xl'>
                <Link href="/">Home</Link>
                <Link href="/users">Users</Link>
                <Link href="/posts">Post</Link> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar