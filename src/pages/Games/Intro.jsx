import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../partials/Header'

const Intro = () => {
  return (
    <div>
      <Header />
      <h1 className="typo-h1 mt-8  text-indigo-900">Game Instruction before start</h1>
      <div className="flex flex-col items-center">
        <ul className="text-xl mx-auto my-12 card">
          <li className="px-6 py-4 border shadow-sm">
            ⚠️ Each Category have Four round
          </li>
          <li className="px-6 py-4 border shadow-sm">ℹ️ One Round contain Five question</li>
          <li className="px-6 py-4 border shadow-sm">
            😳 You should answer three question to pass next round.
          </li>
          <li className="px-6 py-4 border shadow-sm">
           ⏰ Question should be answer withind given time(30sec)
          </li>
          <li className="px-6 py-4 border shadow-sm">😱 You can play game as much as you can.</li>
          <li className="px-6 py-4 border shadow-sm">💰 If you finish one category, You get 20 points</li>
        </ul>
        <Link
          to="/games/category"
          className="btn-primary-large text-3xl px-16 py-4"
        >
          Start
        </Link>
        <div className="mx-auto flex justify-center">
          <p className="font-black text-6xl  text-pink-200 text-center md:mt-40">
            Think Fast and Smart
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
