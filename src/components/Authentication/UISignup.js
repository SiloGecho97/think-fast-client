import React from 'react'

export const UISingup = () => {
  return (
    <div class="flex justify-between">
      <div class="relative md:w-1/2 h-screen hidden md:flex flex-col justify-between p-8 bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-900 text-white">
        <div>
          <header class="mx-2 my-4">
            <span class="text-lg text-purple-200 opacity-50">ThinkFast</span>
            <h1 class="text-4xl font-black text-white w-2/3">
              Think Fast to win.
            </h1>
          </header>
          <div class="flex m-2 text-purple-400 uppercase">
            <span class="mr-4 ">Game</span>
            <span class="mr-4">Play</span>
            <span class="mr-4">Earn</span>
          </div>
        </div>
        <div class="flex text-2xl mx-4 my-4">
          <img
            class="h-6 w-auto sm:h-10 mr-2"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
          <span>ThinkFast</span>
        </div>
        <div class="h-24 w-40 absolute right-12 top-0 mt-10">
          <img src="/4dot.svg" alt="Vercel" class="logo" />
        </div>
        <div class="h-24 w-32 absolute right-1/2 top-1/2 ">
          <img src="/4dot.svg" alt="Vercel" class="logo" />
        </div>

        <div class="h-56 w-80 absolute items-center flex flex-col right-32 top-1/4 shadow-2xl bg-white rounded-2xl">
          <div class="my-6">
            <img
              class="h-12 w-auto sm:h-12 mr-2"
              src="/icons8-time.gif"
              alt=""
            />
          </div>
          <h1 class="text-gray-800 font-bold  text-xl">Getting Started</h1>
          <p class="text-gray-700 font-light text-center w-3/4">
            Register and login countine using the system
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col max-w-xl mx-auto">
        <div class="pt-16 px-16">
          <div class="text-2xl text-gray-700">
            Welcome to <b class="text-purple-700">THINKFAST</b>
          </div>
          <div class="text-md text-gray-600 my-4 w-2/3">
            We make you to play and win games and quizzes and just easy and
            funny
          </div>
        </div>
        <div class="py-16 px-16 text-gray-700">
          <div class="mb-3 pt-0">
            <span class="">Full Name</span>
            <input
              type="text"
              placeholder="Full Name"
              class="
                my-2
                px-3
                py-3
                placeholder-purpleGray-300
                text-purpleGray-600
                relative
                bg-white
                rounded
                text-sm
                border-0
                shadow
                outline-none
                focus:outline-none focus:ring
                w-full
              "
            />
          </div>
          <div class="mb-3 pt-0">
            <span class="">Phone Number</span>
            <input
              type="text"
              placeholder="Phone Number"
              class="
                my-2
                px-3
                py-3
                placeholder-purpleGray-300
                text-purpleGray-600
                relative
                bg-white
                rounded
                text-sm
                border-0
                shadow
                outline-none
                focus:outline-none focus:ring
                w-full
              "
            />
          </div>
          {/*
          <div class="mb-3 pt-0">
            <span class="">E-mail Address</span>
            <input
              type="text"
              placeholder="E-mail Address"
              class="
                my-2
                px-3
                py-3
                placeholder-purpleGray-300
                text-purpleGray-600
                relative
                bg-white
                rounded
                text-sm
                border-0
                shadow
                outline-none
                focus:outline-none focus:ring
                w-full
              "
            />
          </div>
          */}
          <div class="mb-3 pt-0">
            <span class="">Password</span>
            <input
              type="password"
              placeholder="Password"
              class="
                my-2
                px-3
                py-3
                placeholder-purpleGray-300
                text-purpleGray-600
                relative
                bg-white
                rounded
                text-sm
                border-0
                shadow
                outline-none
                focus:outline-none focus:ring
                w-full
              "
            />
          </div>
          <div class="mb-3 pt-0">
            <input
              type="checkbox"
              class="
                my-2
                px-3
                py-3
                placeholder-purpleGray-300
                text-purpleGray-600
                relative
                bg-white
                rounded
                text-sm
                border-0
                shadow
                outline-none
                focus:outline-none focus:ring
              "
            />
            <span class="mx-2 text-base text-gray-700">
              Agree to the terms and policies
            </span>
          </div>
          <button
            class="
              bg-purple-800
              w-full
              text-white
              active:bg-pink-600
              font-bold
              uppercase
              text-xs
              px-4
              py-2
              rounded
              shadow
              hover:shadow-md
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
            type="button"
          >
            Sign up
          </button>
          <div class="flex flex-col items-center my-6">
            <h1>
              Already have account?
              <a href="/login" class="text-purple-700 mx-1">
                {' '}
                Login
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
