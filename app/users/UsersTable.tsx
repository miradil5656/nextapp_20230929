import Link from "next/link"
import {sort} from 'fast-sort'

interface User{
    id: number 
    name: string 
    email :string
}

interface Props{
    sortOrder:string
}
const UsersTable =async ({sortOrder}:Props) => {
 //fetching 
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 const users :User[] = await res.json()

 const sortedUsers = sort(users).asc(
    sortOrder === "email"
    ? (user) => user.email
    : (user) => user.name
 )

  return (
    <table className="min-w-full bg-white">
    <thead className="bg-yellow-300">
        <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <Link href="/users?sortOrder=email">Email</Link>
            </th>
        </tr>
    </thead>
    <tbody>
            {sortedUsers.map((user,index)=>(<tr key={index} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                <td className="py-2 px-4 border-b border-gray-200" ><Link href={`/users/${user.id}`}>{user.name}</Link></td>
                <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                

            </tr>))}   
    </tbody>
</table>
  )
}

export default UsersTable