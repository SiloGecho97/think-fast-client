import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../partials/Header'

const FinishTrial = () => {
  return (
    <>
      <Header />
      <div className="hero min-h-[40rem] bg-base-100 my-16">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold max-w-2xl">
            Successfully Complete Practice game
          </h1>
          <div className="max-w-md">
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex text-start my-4">
              <ul className="space-y-12 text-start">
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                      1
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Verify your Phone Number
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      Your phone number will registered
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                      2
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Monthly Recharge
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      Monthly 30 birr will be deduce from your phone number
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                      3
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      Unlimitted access to Application
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-3 pt-0">
              <input
                type="checkbox"
                className="
                my-2
                px-3
                py-3
                placeholder-purpleGray-300
                text-purpleGray-600
                relative
                bg-white dark:bg-gray-800
                rounded 
                text-sm
                border-0
                shadow
                outline-none
                focus:outline-none focus:ring
              "
              />
              <span className="mx-2 text-base text-gray-700">
                <span>I read above listed points and Agree to terms </span>
              </span>
            </div>
            <Link to="/verify" className="btn btn-primary">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinishTrial
