import Link from "next/link"
import UsersTable from "./UsersTable"
import { Suspense } from "react"

interface Props{
    searchParams:{sortOrder:string}
}

const Users =({searchParams:{sortOrder}}:Props) => {

  return (
    <>
    <div className="flex flex-col w-[80%]  justify-between items-center p-4 m-auto">
        <h1 className="text-3xl mb-8">Users</h1>
        <Link href="/users/new" className="btn btn-primary">New User</Link>
        <Suspense fallback={<p>Loading ...</p>}>
          <UsersTable sortOrder={sortOrder}/>
        </Suspense>
    </div>
    </>
  )
}

export default Users