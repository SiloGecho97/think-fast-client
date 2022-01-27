import React from 'react'
import Timer from '../../components/Games/Timer'
import Header from '../../partials/Header'

const Play = () => {
  return (
    <div className="bg-gray-50 pb-40">
      <Header />
      <div className="px-16 flex justify-end ">
        <Timer />
      </div>
      <div className="mx-auto w-full flex flex-col items-center my-10">
        <div className="card max-w-2xl w-full p-16">
          <p className="text-3xl font-bold text-center">
            Who invented the Light Bulb?
          </p>
          <ul className="m-6 max-w-lg">
            <li className="choice my-3   ">Thomas Alva Edison</li>
            <li className="choice my-3">Abreham Lincon</li>
            <li className="choice my-3">Jefferson John</li>
            <li className="choice my-3">Albert Enstein</li>
          </ul>
        </div>

        <div>
          <button className="btn-primary mt-8 text-xl">Skip</button>
        </div>
      </div>
    </div>
  )
}

export default Play
