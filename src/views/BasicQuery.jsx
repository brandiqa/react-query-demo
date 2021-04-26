import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import UserTable from '../components/UserTable'

function BasicQuery() {
  const { data, status } = useQuery('users', () =>
    axios.get('http://localhost:3004/users')
  )

  return (
    <div>
      <h2 className="mb-4">Basic Query Example</h2>
      <div>
        {status === 'error' && <div>Error fetching data</div>}

        {status === 'loading' && <div>Loading...</div>}

        {status === 'success' && <UserTable users={data.data} />}
      </div>
    </div>
  )
}

export default BasicQuery
