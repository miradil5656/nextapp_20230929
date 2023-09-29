

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
        <ul className="text-2xl flex flex-col gap-4">
            {users.map((user,index)=>(<li key={index}>{user.id} . {user.name}</li>))}
        </ul>
    </div>
        
    </>
  )
}

export default Users