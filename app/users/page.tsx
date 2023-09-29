import UsersTable from "./UsersTable"

const Users =() => {

  return (
    <>
    <div className="flex flex-col w-[80%]  justify-between items-center p-4 m-auto">
        <h1 className="text-3xl mb-8">Users</h1>
        <UsersTable />
    </div>
    </>
  )
}

export default Users