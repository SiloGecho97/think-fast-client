import classNames from 'classnames'
import React from 'react'
import Header from '../../partials/Header'

const fetchLeadboards = [
  {
    name: 'Silas Getachew',
    score: 220,
  },
  {
    name: 'Bekela Dagaga',
    score: 130,
  },
  {
    name: 'Amanu Tolosa',
    score: 120,
  },
  {
    name: 'Idosa Tadasa',
    score: 100,
  },
  {
    name: 'Jawar Gobana',
    score: 90,
  },
]
const Leadboard = () => {
  return (
    <div className="max-w-lg my-12 w-full">
      <h3 className="text-gray-800 font-bold my-8 ">This Week Champions</h3>

      <div className="flex justify-between items-baseline pr-6">
        <h5 className="font-bold">Leadboard</h5>
        <h6 className="">Score</h6>
      </div>
      {fetchLeadboards.map((item, index) => (
        <div
          className={classNames(
            `flex justify-between max-w-lg  shadow rounded-lg px-5 py-1 my-4 text-lg ${
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
