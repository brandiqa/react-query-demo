import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect, useLocation } from 'react-router-dom'

import './form.css'

function UserForm({ user, submitText, submitAction }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const { state } = useLocation()
  const { from } = state || { from: { pathname: '/' } }
  const [redirectToReferrer, setRedirectToReferrer] = useState(false)

  const redirect = (e) => {
    e.preventDefault()
    setRedirectToReferrer(true)
  }

   if (redirectToReferrer) {
     return <Redirect to={from} />
   }

  return (
    <div>
      <form className="max-w-md mt-4" onSubmit={handleSubmit(submitAction)}>
        {user && (
          <section className="field">
            <label htmlFor="id">User Id</label>
            <input type="text" name="id" value={user.id} disabled />
          </section>
        )}

        <section className="flex flex-col field md:flex-row">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" {...register('firstName', { required: true })} />
            <span className="errors">
              {errors.firstName && 'First name is required'}
            </span>
          </div>
          <div className="mt-2 md:mt-0 md:ml-4">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...register('lastName', { required: true })} />
            <span className="errors">
              {errors.lastName && 'Last name is required'}
            </span>
          </div>
        </section>

        <section className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <span className="errors">
            {errors.email &&
              errors.email.type === 'required' &&
              'Email is required'}
            {errors.email &&
              errors.email.type === 'pattern' &&
              'Provide a valid email address'}
          </span>
        </section>

        <section className="field">
          <label htmlFor="gender">Gender</label>
          <select {...register('gender', { required: true })}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <span className="errors">
            {errors.gender && 'Gender is required'}
          </span>
        </section>

        <div className="flex mt-8 justify-between">
          <button
            className="bg-teal-800 border-teal-800 shadow-md text-white btn hover:bg-gray-100 hover:border-2 hover:text-teal-900"
            type="submit"
          >
            {submitText}
          </button>
          <button className="border-2 border-gray-600 shadow-md text-white text-gray-600 btn hover:bg-gray-600 hover:text-gray-100" onClick={redirect}>
            Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
