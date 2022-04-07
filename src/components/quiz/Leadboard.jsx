import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { getInfo } from '../../_services/user.service'

const fetchLeadboards = [
  {
    name: 'Abinat Getachew',
    score: 220,
  },
  {
    name: 'Tola Adamu',
    score: 130,
  },
  {
    name: 'Yonathan Tolosa',
    score: 120,
  },
  {
    name: 'Fikiru Tadasa',
    score: 100,
  },
  {
    name: 'Mohammed Ahmed',
    score: 290,
  },
]
const Leadboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, _] = useState(() => getInfo())
  useEffect(() => {
    fetchLeadboards.push({ name: 'Your position', score: user.championsPt })
    fetchLeadboards.sort((a, b) => b.score - a.score)
  }, [user])

  return (
    <div className="max-w-xl my-12 w-full">
      <h4 className="text-gray-800 font-bold font-sora  mt-8 mb-4 -ml-1 ">
        This Week
        <span className="font-extrabold text-indigo-700"> Champions</span>
      </h4>
      <p className="mb-8 text-lg text-black">
        Only Top 3 of this week will be awarded, answer the question improve you
        current score and leadboard
      </p>
      <div className="max-w-[480px] flex justify-between items-baseline pr-6">
        <h5 className="font-bold">Leadboard</h5>
        <h6 className="">Score</h6>
      </div>
      {fetchLeadboards.map((item, index) => (
        <div
          className={classNames(
            `flex justify-between max-w-[480px]  shadow rounded-lg px-5 py-1 my-4 text-lg ${
              index < 3 ? 'bg-indigo-800 text-white' : 'bg-white text-sky-900'
            }`
          )}
        >
          <span>{item.name}</span>
          <span className="text-2xl font-black">{item.score}</span>
        </div>
      ))}
    </div>
  )
}

export default Leadboard
