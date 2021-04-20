import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import UserForm from '../components/UserForm'

const getUser = async ({ queryKey }) => {
  const [_key, { id }] = queryKey
  const response = await fetch(`http://localhost:3004/users/${id}`)

  if (!response.ok) {
    throw new Error(response.json().message)
  }

  return response.json()
}

function EditUser() {
  const { id } = useParams()
  const { data, error, isLoading, isError } = useQuery(
    ['user', { id }],
    getUser
  )

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2>Edit User</h2>
      <div>
        {isError && <div>{error}</div>}

        {isLoading && <div>Loading...</div>}

        {data && (
          <UserForm user={data} submitText="Update" submitAction={onSubmit} />
        )}
      </div>
    </div>
  )
}

export default EditUser
