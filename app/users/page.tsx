

interface User{
    id: number 
    name: string 
    email :string
}

const Users =async () => {
    //fetching 
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users :User[] = await res.json()

  return (
    <>
    <div className="flex flex-col w-[80%]  justify-between items-center p-4 m-auto">
        <h1 className="text-3xl mb-8">Users</h1>
        {/* <ul className="text-2xl flex flex-col gap-4">
            {users.map((user,index)=>(<li key={index}>{user.id} . {user.name}</li>))}
        </ul> */}
        <table className="min-w-full bg-white">
            <thead className="bg-yellow-300">
                <tr>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                </tr>
            </thead>
            <tbody>
                    {users.map((user,index)=>(<tr key={index} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                        <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>

                    </tr>))}   
            </tbody>
        </table>
    </div>
        
    </>
  )
}

export default Users