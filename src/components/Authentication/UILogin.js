import React from 'react'
import { ReactComponent as Dot4 } from '../../assets/4dot.svg'
import countdown from '../../assets/icons8-time.gif'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const UILogin = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    navigate('/home')
  }

  return (
    <div className="flex justify-between">
      <div className="relative md:w-1/2 h-screen hidden md:flex flex-col justify-between p-8 bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-900 text-white">
        <div>
          <header className="mx-2 my-4">
            <span className="text-lg text-purple-200 opacity-50">
              ThinkFast
            </span>
            <h1 className="text-4xl font-black text-white w-2/3">
              Think Fast to win.
            </h1>
          </header>
          <div className="flex m-2 text-purple-400 uppercase">
            <span className="mr-4 ">Game</span>
            <span className="mr-4">Play</span>
            <span className="mr-4">Earn</span>
          </div>
        </div>
        <div className="flex text-2xl mx-4 my-4">
          <img
            className="h-6 w-auto sm:h-10 mr-2"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
          <span>ThinkFast</span>
        </div>
        <div className="h-24 w-40 absolute right-0 top-0 mt-10">
          <Dot4 className="w-72 h-40" />
        </div>
        <div className="h-24 w-32 absolute right-1/2 top-1/2 ">
          <Dot4 className="w-32 h-24" />
        </div>

        <div className="h-56 w-80 absolute items-center flex flex-col right-32 top-1/4 shadow-2xl bg-white rounded-2xl">
          <div className="my-6">
            <img className="h-12 w-auto sm:h-12 mr-2" src={countdown} alt="" />
          </div>
          <h1 className="text-gray-800 font-bold  text-xl">Getting Started</h1>
          <p className="text-gray-700 font-light text-center w-3/4">
            Register and login countine using the system
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col max-w-lg  mx-auto ">
        <div className="pt-16 px-16">
          <div className="text-2xl text-gray-700">
            Welcome to <b className="text-purple-700">ThinkFast</b>
          </div>
          <div className="text-md text-gray-600 my-4 w-2/3">
            We make you to play and win games and quizzes and just easy and
            funny
          </div>
        </div>
        <div className="py-16 px-16 text-gray-700">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 pt-0">
              <span className="">Phone Number</span>
              <input
                {...register('phoneNumber', { required: true })}
                name="phoneNumber"
                type="text"
                placeholder="0912345678"
                className="text-field"
              />
              <span className="text-red-600">
                {errors.phoneNumber && <p>PhoneNumber is required.</p>}
              </span>
            </div>
            <div className="mb-3 pt-0">
              <span className="">Password</span>
              <input
                {...register('password', { required: true })}
                name="password"
                type="password"
                placeholder="Password"
                className="text-field"
              />
              <span className="text-red-600">
                {errors.phoneNumber && <p>Password is required.</p>}
              </span>
            </div>
            <div className="mb-3 pt-0">
              <input
                type="checkbox"
                className="my-2 px-3 py-3 placeholder-purpleGray-300 text-purpleGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
              />
              <span className="mx-2 text-base text-gray-700">
                Keep me logged in
              </span>
            </div>
            <button
              className="bg-purple-800 w-full text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col items-center my-6">
            <h1>
              Don't you have account?
              <a href="/signup" className="text-purple-700 mx-1">
                {' '}
                Signup
              </a>
            </h1>
            <a href="/forgot" className="text-purple-700 mx-2">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}