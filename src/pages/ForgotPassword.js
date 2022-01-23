import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold my-2 max-w-md text-center">
        Send Verification Code to reset password
      </h1>
      <p>Check you message box for six-digit number</p>
      <div class="py-16 px-16 text-gray-700">
        <div class="mb-3 pt-0">
          <span class="">Phone Number</span>
          <input
            type="text"
            required="true"
            placeholder="0912345678"
            class="my-2 px-3 py-3 placeholder-purpleGray-300 text-purpleGray-600 relative bg-white rounded text-sm border-0 shadow  outline-none focus:outline-none focus:ring w-full"
          />
        </div>

        <button
          class="bg-purple-800 w-full text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Send
        </button>
        <div class="flex flex-col items-center my-6">
          <h1>
            Don't recieve the code?
            <a href="/signup" class="text-purple-700 mx-1">
              {' '}
              Resend
            </a>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
