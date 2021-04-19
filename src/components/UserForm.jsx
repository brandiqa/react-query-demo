import React from 'react'

import './form.css'

function UserForm({ submitText, submitAction }) {
  return (
    <div>
      <form className="max-w-md mt-4" onSubmit={submitAction}>
        <section className="field">
          <label htmlFor="id">User Id</label>
          <input type="text" name="id" disabled />
        </section>

        <section className="flex flex-col field md:flex-row">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              // ref={register({ required: true })}
            />
            <span className="errors">
              {/* {errors.firstName && 'First name is required'} */}
            </span>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              // ref={register({ required: true })}
            />
            <span className="errors">
              {/* {errors.lastName && 'Last name is required'} */}
            </span>
          </div>
        </section>

        <section className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            // ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <span className="errors">
            {/* {errors.email &&
              errors.email.type === 'required' &&
              'Email is required'}
            {errors.email &&
              errors.email.type === 'pattern' &&
              'Provide a valid email address'} */}
          </span>
        </section>

        <section className="field">
          <label htmlFor="gender">Gender</label>
          <select name="gender">
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <span className="errors"></span>
        </section>

        <div className="flex mt-8 justify-between">
          <button
            className="bg-teal-800 border-teal-800 shadow-md text-white btn hover:bg-gray-100 hover:border-2 hover:text-teal-900"
            type="submit"
          >
            {submitText}
          </button>
          <button className="border-2 border-gray-600 shadow-md text-white text-gray-600 btn hover:bg-gray-600 hover:text-gray-100">
            Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
