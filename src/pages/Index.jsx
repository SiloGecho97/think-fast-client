import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import FeaturesHome from '../partials/Features'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import Testimonials from '../partials/Testimonials'
import Newsletter from '../partials/Newsletter'
import Footer from '../partials/Footer'
const Index = () => {
  return (
    <>
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 max-w-screen-2xl">
        <svg
          className="mr-3 h-40"
          viewBox="0 0 52 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
            fill="#76A9FA"
          />
          <path
            d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
            fill="#A4CAFE"
          />
          <path
            d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
            fill="#1C64F2"
          />
        </svg>
        <h1 className="text-8xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-primary font-bold">
          ThinkFast coming soon
        </h1>
        <Link
          className="block my-8 btn-primary w-max text-4xl px-16 py-4 rounded-lg"
          to="/login"
        >
          Get Start
        </Link>

        <p className=" font-extralight text-3xl">Stay Tuned</p>
      </div>
    </>
  )
}

export default Index
