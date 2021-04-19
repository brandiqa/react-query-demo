import React from 'react'
import EditIcon from '../icons/edit'
import DeleteIcon from '../icons/delete'

function UserTable({ users }) {
  const deleteUser = (id) => {
    alert(`Delete User ${id}`)
  }

  const rows = users.map((user, index) => (
    <tr
      className="border border-cyan-800 hover:bg-gray-300 active:bg-blue-200"
      key={index}
    >
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td className="hover:underline">{user.email}</td>
      <td>{user.gender}</td>
      <td className="border-none text-cyan-800 inline-flex">
        <button className="p-2 hover:text-cyan-500">
          <EditIcon />
        </button>
        <button
          className="p-2 hover:text-cyan-500"
          onClick={() => deleteUser(user.id)}
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  ))

  return (
    <table className="table-auto">
      <thead className="bg-cyan-900 text-white">
        <tr className="py-4">
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default UserTable
