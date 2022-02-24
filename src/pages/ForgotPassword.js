import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold my-2 max-w-md text-center">
        Send Verification Code to reset password
      </h1>
      <p>Check you message box for six-digit number</p>
      <div className="py-16 px-16 text-gray-700">
        <div className="mb-3 pt-0">
          <span className="">Phone Number</span>
          <input
            type="text"
            required="true"
            placeholder="0912345678"
            className="my-2 px-3 py-3 placeholder-purpleGray-300 text-purpleGray-600 relative bg-white rounded text-sm border-0 shadow  outline-none focus:outline-none focus:ring w-full"
          />
        </div>

        <button
          className="bg-purple-800 w-full text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Send
        </button>
        <div className="flex flex-col items-center my-6">
          <p>
            Don't recieve the code?
            <a href="/signup" className="text-purple-700 mx-1">
              {' '}
              Resend
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
