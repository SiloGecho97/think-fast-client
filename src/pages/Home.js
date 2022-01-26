import React from 'react'
import Header from '../partials/Header'

const Home = () => {
  return (
    <div>
      <Header />

      <section className="mx-20 mt-20 flex">
        <div className="w-1/2 p-8">
          <h2 className="font-bold text-primary text-6xl">Play Quiz</h2>
          <p className="my-3 max-w-md text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <button className="btn-primary-large my-8 w-auto ">Get Start</button>
        </div>
        <div className="bg-primary rounded-3xl w-1/2 h-80 p-8">
          <h2 className="font-bold text-white text-6xl">Play Game</h2>
          <p className="my-3 max-w-md text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <button className="btn-primary-large my-8 w-auto ">Play</button>
        </div>
      </section>
    </div>
  )
}

export default Home
