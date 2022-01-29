import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <section className="mx-4 md:mx-20 mt-20 flex md:flex-row flex-col  max-w-screen-2xl">
        <div className="w-full p-8">
          <h2 className="font-bold text-primary text-6xl">Play Quiz</h2>
          <p className="my-3 max-w-md text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <Link to="/games" className="btn-primary-large my-8 w-max block">
            Get Start
          </Link>
        </div>
        <div className="bg-primary rounded-3xl w-full h-80 p-8">
          <h2 className="font-bold text-white text-6xl">Play Game</h2>
          <p className="my-3 max-w-md text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <Link
            to="/games"
            className="btn-primary-large bg-blue-600 my-8 w-max block "
          >
            Play
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
