import React from 'react'

function FlashAlert({ message }) {
  return (
    <div className="border rounded bg-green-100 border-green-800 py-1 px-4 text-green-600">
      <span className="font-bold">Notice:</span> {message}
    </div>
  )
}

export default FlashAlert
