import React from 'react'

import UserForm from '../components/UserForm'

function CreateUser() {
  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2>New User</h2>
      <UserForm submitText="Create" submitAction={onSubmit} />
    </div>
  )
}

export default CreateUser
