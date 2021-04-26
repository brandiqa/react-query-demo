import React from 'react'
import { useQuery } from 'react-query'

import UserTable from '../components/UserTable'

function BasicQuery() {
  const fetchAllUsers = async () =>
    await (await fetch('http://localhost:3004/users')).json()

  const { data, error, status } = useQuery('users', fetchAllUsers)

  return (
    <div>
      <h2 className="mb-4">Basic Query Example</h2>
      <div>
        {status === 'error' && <div>{error.message}</div>}

        {status === 'loading' && <div>Loading...</div>}

        {status === 'success' && <UserTable users={data} />}
      </div>
    </div>
  )
}

export default BasicQuery
