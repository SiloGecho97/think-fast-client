import React from 'react'
import { Link } from 'react-router-dom';
import ReactCodeInput from 'react-verification-code-input';
const VerifyPhone = () => {
  return (

    <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
     <div className='max-w-lg  w-full mx-auto p-8'>
      <h1 className="text-4xl font-bold my-2 max-w-md text-center">
        Verify your phone Number
      </h1>
      <p className='text-center'>Verification code sent to 091234xxxx Please enter the code from your message box.</p>
      <div className="py-12 px-16 text-gray-700">
        <div className="mb-3 pt-0">
          <span className="mb-4 text-xl">Code</span>
          <ReactCodeInput />
        </div>

        <Link to="/home"
          className="btn"
          type="button"
        >
          Verify
        </Link>
        <div className="flex flex-col items-center my-6">
          <p>
            Don't recieve the code?
            <a href="/signup" className="text-purple-700 mx-1">
              {' '}
              Resend
            </a>
          </p>
        </div>
      </div></div>
    </div>
  )
}

export default VerifyPhone
