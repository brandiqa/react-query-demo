import React from 'react'
import Modal from 'react-modal'
import ExclamationIcon from '../icons/exclamation'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(24, 48, 63, 0.79)',
  },
}

Modal.setAppElement('#modal-root')

function DeleteModal({ id, showModal, deleteAction, cancelAction }) {
  return (
    <Modal style={customStyles} isOpen={showModal}>
      <div className="flex">
        <div className="mt-2 text-3xl text-red-700">
          <ExclamationIcon className="" />
        </div>
        <div className="ml-8">
          <h3 className="font-semibold text-xl text-gray-900">
            Delete Confirmation
          </h3>
          <p className="font-semibold mt-2 text-sm text-gray-500">
            Are you sure you want to delete{' '}
            <span className="font-bold">User {id}</span> ?
          </p>
          <div className="mt-8 text-right">
            <button
              className="border border-gray-200 btn hover:bg-gray-50"
              onClick={cancelAction}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 text-white ml-4 btn hover:bg-red-700"
              onClick={() => deleteAction(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteModal
