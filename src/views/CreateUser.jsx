import React from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'

import UserForm from '../components/UserForm'
import { Redirect } from 'react-router-dom'

function CreateUser() {
  const mutation = useMutation((newUser) =>
    axios.post('http://localhost:3004/users', newUser)
  )
  const { isLoading, isError, error, isSuccess } = mutation

  const onSubmit = async (data) => {
    mutation.mutate(data)
  }

  return (
    <div>
      <h2>New User</h2>

      {isError && <div>An error occurred: {error.message}</div>}

      {isLoading && <div>Loading...</div>}

      {isSuccess && <Redirect to="/" />}

      <UserForm submitText="Create" submitAction={onSubmit} />
    </div>
  )
}

export default CreateUser
