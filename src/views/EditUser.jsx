import React from 'react'

import UserForm from '../components/UserForm'

function EditUser() {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('update not done')
  }

  return (
    <div>
      <h2>Edit User</h2>
      <UserForm submitText="Update" submitAction={onSubmit} />
    </div>
  )
}

export default EditUser
