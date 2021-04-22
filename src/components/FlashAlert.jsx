import React, { useContext } from 'react'

import CloseIcon from '../icons/close'
import { AppContext } from '../store/app-context'

function FlashAlert({ message }) {
  const [flashMessage, setFlashMessage] = useContext(AppContext)

  return (
    <div className="border rounded flex bg-lime-100 border-lime-800 px-2 text-lime-800 justify-between items-center">
      <span className="font-bold py-1">Attention: &nbsp;</span> {message}
      <button
        className="rounded mt-1 ml-8 p-1 text-green-800 hover:bg-green-200"
        onClick={() => setFlashMessage('')}
      >
        <CloseIcon />
      </button>
    </div>
  )
}

export default FlashAlert
