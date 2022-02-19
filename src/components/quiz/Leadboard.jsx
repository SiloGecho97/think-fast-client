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
    <div>
      <Header />
      <div className="max-w-3xl mx-auto my-12">
        <p className="text-gray-700 text-center text-2xl my-8 ">
          Daily Top 3 will be awarded.
        </p>

        <div className="flex justify-between items-baseline pr-6">
          <h4 className="font-bold">Leadboard</h4>
          <h5 className="">Score</h5>
        </div>
        {fetchLeadboards.map((item, index) => (
          <div
            className={classNames(
              `flex justify-between max-w-3xl  shadow rounded-xl px-5 py-4 my-6 text-2xl ${
                index < 3 ? 'bg-sky-900 text-white' : 'bg-gray-100 text-sky-900'
              }`
            )}
          >
            <span>{item.name}</span>
            <span className="text-3xl font-black">{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leadboard
