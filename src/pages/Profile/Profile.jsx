import React, { useEffect, useState } from 'react'
import { FaDollarSign, FaSortNumericDown } from 'react-icons/fa'
import { getFromLocalStorage } from '../../_services/user.service'

const Profile = () => {
  const [info, setInfo] = useState({})
  useEffect(() => {
    // setUser(getFromLocalStorage())
    setInfo(() => getFromLocalStorage())
  }, [])
  return (
    <div>
      <main className="profile-page">
        <section className="relative block" style={{ height: '500px' }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center"></div>
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
                      <span className="font-bold text-primary ">
                        {info.today}pts
                      </span>
                    </div>
                  </div>
                  <div className="my-10">
                    <p className="mb-3 ">Weekly Champions</p>
                    <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
                      <span className="p-2 bg-indigo-900 rounded text-white">
                        <FaDollarSign className="" />
                      </span>
                      <span className="font-bold text-primary ">
                        {info.championsPt}pts
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-3 ">This Week</p>
                    <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
                      <span className="p-2 bg-indigo-900 rounded text-white">
                        <FaDollarSign className="" />
                      </span>
                      <span className="font-bold text-green-700 ">
                        {info.week}pts
                      </span>
                    </div>
                    <div className="flex justify-between border-b pb-2 mb-3 border-gray-200">
                      <span className="p-2 bg-green-900 rounded text-white">
                        <FaSortNumericDown className="" />
                      </span>
                      <span className="font-bold text-green-700 ">
                        {' '}
                        {info.week2}pts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile
