import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import {
  FaBell,
  FaDollarSign,
  FaSortNumericDown,
  FaSortNumericUp,
} from 'react-icons/fa'
import Leadboard from '../components/quiz/Leadboard'
const Home = () => {
  return (
    <div className="flex bg-gray-50">
      <div className="w-4/5 shadow-2xl rounded-tr-2xl">
        <section>
          <div className="bg-white dark:bg-gray-800 ">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block">Want to be Earn money Daily ?</span>
                <span className="block text-indigo-500">
                  It&#x27;s today or never.
                </span>
              </h2>
              <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
                There will be a daily winner(one upto three) and there will be a
                weekly winner from daily winners top 3. From the given
                questions.
              </p>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                  <button
                    type="button"
                    className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Play Daily Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-4 md:mx-20 mt-20 flex md:flex-row flex-col  max-w-screen-2xl">
          <div className="w-full p-8">
            <h2 className="font-bold text-primary text-6xl">Play Quiz</h2>
            <p className="my-3 max-w-md text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <Link to="/quiz" className="btn-primary-large my-8 w-max block">
              Get Start
            </Link>
          </div>
          <div className="bg-primary rounded-3xl w-full h-80 p-8">
            <h2 className="font-bold text-white text-6xl">Play Game</h2>
            <p className="my-3 max-w-md text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <Link
              to="/games"
              className="btn-primary-large bg-blue-600 my-8 w-max block "
            >
              Play
            </Link>
          </div>
        </section>
        {/* this week champions */}
        <section className="bg-gray-50 flex w-full mx-8">
          <Leadboard />
          <div>Play</div>
        </section>
      </div>
      <div className="w-1/5 bg-gray-100 h-auto p-5 ">
        <div className="flex items-center justify-end">
          <FaBell className="w-6 h-6 mr-6 cursor-pointer" />
          <div class="dropdown dropdown-end">
            <div tabindex="0" class="avatar online cursor-pointer">
              <div class="w-8 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=28212"
                  alt="Avatar"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Account Setting</a>
              </li>
              <li>
                <a>Withdraw</a>
              </li>
              <li>
                <a>Loguot</a>
              </li>
            </ul>
          </div>
        </div>
        {/* balance and point */}
        <div className="flex flex-col my-8">
          <div className="bg-indigo-200 py-8 px-6 rounded-xl flex justify-between font-black text-xl items-baseline">
            <span>Daily</span>
            <span>3000pts</span>
          </div>
          <div className="my-10">
            <p className="mb-3 ">Today</p>
            <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
              <span className="p-2 bg-indigo-900 rounded text-white">
                <FaDollarSign className="" />
              </span>
              <span className="font-bold text-primary "> +250pts</span>
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-3 ">This Week</p>
            <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
              <span className="p-2 bg-indigo-900 rounded text-white">
                <FaDollarSign className="" />
              </span>
              <span className="font-bold text-green-700 "> +2350pts</span>
            </div>
            <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
              <span className="p-2 bg-green-900 rounded text-white">
                <FaSortNumericUp className="" />
              </span>
              <span className="font-bold text-green-700 "> +150ETB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
