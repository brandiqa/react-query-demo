import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from "react-router-dom";

import UserForm from '../components/UserForm'

const fetchUser = async (id) => {
  const res = await fetch(`http://localhost:3004/users/${id}`)
  return res.json()
}

function EditUser() {
  const { id } = useParams();
  const { data, status } = useQuery('user', () => fetchUser(id))

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2>Edit User</h2>
      <div>
        {status === 'error' && <div>Error fetching data</div>}

        {status === 'loading' && <div>Loading...</div>}

        {status === 'success' && <UserForm user={data} submitText="Update" submitAction={onSubmit} />}
      </div>

    </div>
  )
}

export default EditUser
