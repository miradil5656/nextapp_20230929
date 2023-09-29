import UsersTable from "./UsersTable"

interface Props{
    searchParams:{sortOrder:string}
}

const Users =({searchParams:{sortOrder}}:Props) => {

  return (
    <>
    <div className="flex flex-col w-[80%]  justify-between items-center p-4 m-auto">
        <h1 className="text-3xl mb-8">Users</h1>
        <UsersTable sortOrder={sortOrder}/>
    </div>
    </>
  )
}

export default Users