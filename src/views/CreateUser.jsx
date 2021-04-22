import React, { useContext } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useMutation } from 'react-query'

import { AppContext } from '../store/app-context'
import UserForm from '../components/UserForm'

async function postUser(newUser) {
  const response = await axios.post('http://localhost:3004/users', newUser)
  return await response.data
}

function CreateUser() {
  const [flashMessage, setFlashMessage] = useContext(AppContext)
  const mutation = useMutation((newUser) => postUser(newUser), {
    onSuccess: (data) => {
      setFlashMessage(
        `New User Created - Id: ${data.id} Name: ${data.first_name} ${data.last_name}`
      )
    },
  })

  const { isLoading, isError, error, isSuccess } = mutation

  const onSubmit = async (data) => {
    mutation.mutate(data)
  }

  if (isSuccess) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h2>New User</h2>

      {isError && <div>An error occurred: {error.message}</div>}

      {isLoading && <div>Loading...</div>}

      <UserForm submitText="Create" submitAction={onSubmit} />
    </div>
  )
}

export default CreateUser
