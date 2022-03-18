import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaDollarSign, FaSortNumericUp } from 'react-icons/fa'
import Leadboard from '../components/quiz/Leadboard'
import { useNavigate } from 'react-router-dom'
import { getFromLocalStorage } from '../_services/user.service'

const Home = () => {
  const [info, setInfo] = useState({})
  useEffect(() => {
    // setUser(getFromLocalStorage())
    setInfo(()=>getFromLocalStorage())
  }, [])
  
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <div className="flex bg-gray-100">
      <div className="lg:w-4/5 w-full shadow-2xl lg:rounded-tr-4xl">
        <section>
          <div className="bg-white dark:bg-gray-800 lg:rounded-tr-4xl ">
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
                  <Link to="/quiz" type="button" className="btn btn-primary">
                    Play Weekly Quiz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-8 px-8 flex md:flex-row flex-col max-w-screen-2xl bg-indigo-900">
          <div className="rounded-3xl w-full lg:h-76 p-8">
            <h2 className="font-bold text-white text-6xl">Play Game</h2>
            <p className="my-3 max-w-md text-gray-200">
              Play Game as much as you can, earn points. Inorder to play games you need to 
              select category first, you have to answer atleast three question to pass the next round. 
              if you finish all the round of one category, you will collect points.
            </p>
            <Link to="/games" className="btn btn-outline btn-accent ">
              Play
            </Link>
          </div>
        </section>
        {/* this week champions */}
        <section className="bg-gray-50  flex flex-col lg:flex-row items-baseline w-full px-8 ">
          <Leadboard />
          <div className="w-full p-8">
            <h3 className="leading-[120%]">
              Continue Play{' '}
              <span className="text-indigo-600 font-extrabold">Champions</span>{' '}
              Quiz
            </h3>
            <p className="my-3 max-w-md text-gray-900">
              Compete with other to win Weekly Champions. Inorder to win you have to answer all 50 questions.
              Top 3 of the leadboard will win the price. 
            </p>
            <Link to="/quiz" className="btn-primary-large my-8 w-max block">
              Get Start
            </Link>
          </div>
        </section>
      </div>
      <div className="w-1/5 hidden lg:block bg-gray-100 h-auto p-5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-0 border-gray-200">
        <div className="flex items-center justify-end">
          <FaBell className="w-6 h-6 mr-6 cursor-pointer" />
          <div className="dropdown dropdown-end">
            <div tabindex="0" className="avatar online cursor-pointer">
              <div className="w-8 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=28212"
                  alt="Avatar"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/#">Account Setting</a>
              </li>
              <li>
                <Link to="/withdraw">Withdraw</Link>
              </li>
              <li onClick={(e) => logout()}>
                <a href="/#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        {/* balance and point */}
        <div className="flex flex-col my-8">
          <div className="bg-indigo-200 py-8 px-6 rounded-xl flex justify-between font-black text-xl items-baseline">
            <span>Daily</span>
            <span>{info.dailybalance}pts</span>
          </div>
          <div className="my-10">
            <p className="mb-3 ">Today</p>
            <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
              <span className="p-2 bg-indigo-900 rounded text-white">
                <FaDollarSign className="" />
              </span>
              <span className="font-bold text-primary ">{info.today}pts</span>
            </div>
          </div>
          <div className="my-10">
            <p className="mb-3 ">Weekly Champions</p>
            <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
              <span className="p-2 bg-indigo-900 rounded text-white">
                <FaDollarSign className="" />
              </span>
              <span className="font-bold text-primary ">{info.championsPt}pts</span>
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-3 ">This Week</p>
            <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
              <span className="p-2 bg-indigo-900 rounded text-white">
                <FaDollarSign className="" />
              </span>
              <span className="font-bold text-green-700 ">{info.week}pts</span>
            </div>
            <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
              <span className="p-2 bg-green-900 rounded text-white">
                <FaSortNumericUp className="" />
              </span>
              <span className="font-bold text-green-700 "> {info.week2}pts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
