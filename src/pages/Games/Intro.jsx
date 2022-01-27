import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../partials/Header'

const Intro = () => {
  return (
    <div>
      <Header />
      <h1 className="text-primary font-bold text-5xl text-center mt-8">
        Game Instruction before start
      </h1>
      <div className="flex flex-col items-center">
        <ul className="list-decimal text-2xl mx-auto my-12">
          <li className="my-4">One Round contain Five question</li>
          <li className="my-4">
            You should answer three round to pass next round.
          </li>
          <li className="my-4">
            Question should be answer withind given time(30sec)
          </li>
          <li className="my-4">
            You only award if you finish total round to selected for candidate
          </li>
          <li className="my-4">Top Five leadboard will be awarded</li>
        </ul>
        <Link
          to="/games/play"
          className="btn-primary-large text-3xl px-16 py-4"
        >
          Start
        </Link>
        <div className="mx-auto flex justify-center">
          <p className="font-black text-6xl text-primary text-center md:mt-40">
            Think Fast and Smart
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro