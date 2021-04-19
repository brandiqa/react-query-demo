import React from 'react'
import { useQuery } from 'react-query'

import UserTable from '../components/UserTable'

const fetchUsers = async () => {
  const res = await fetch(' http://localhost:3004/users')
  return res.json()
}

function BasicQuery() {
  const { data, status } = useQuery('users', fetchUsers)

  return (
    <div>
      <h2 className="mb-4">Basic Query Example</h2>
      <div>
        {status === 'error' && <div>Error fetchiing data</div>}

        {status === 'loading' && <div>Loading...</div>}

        {status === 'success' && <UserTable users={data} />}
      </div>
    </div>
  )
}

export default BasicQuery
