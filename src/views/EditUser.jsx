import React from 'react'

import UserForm from '../components/UserForm'

function EditUser() {
  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2>Edit User</h2>
      <UserForm submitText="Update" submitAction={onSubmit} />
    </div>
  )
}

export default EditUser
