import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../partials/Header'

const cateogries = [
  'General Knowledge',
  'Eat or Drink',
  'Aptitude',
  'Health',
  'Locations',
  'Sports',
  'Science',
  'Movies',
]
const Categroy = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const categorySelect = () => {
    navigate('/games/play', { category: cateogries[selected] })
  }

  return (
    <div className="">
      <Header />
      <h1 className="typo-h1 mt-32 mb-8">Select Category</h1>
      <div className="flex items-center justify-center flex-wrap max-w-screen-xl text-center mx-auto">
        {cateogries.map((item, index) => (
          <div
            className={`banner ${
              selected !== index
                ? 'bg-gray-200 rounded-full px-16 p-8 m-4 text-primary hover:bg-primary hover:text-white hover:shadow-xl cursor-pointer'
                : 'rounded-full px-16 p-8 m-4 hover:text-white bg-primary hover:bg-primary text-white hover:shadow-xl cursor-pointer'
            }`}
            onClick={(e) => setSelected(index)}
            key={index}
          >
            <span className=" font-black text-2xl">{item}</span>
          </div>
        ))}
      </div>
      <div className="text-center my-8 ">
        <button
          onClick={(e) => categorySelect()}
          className="bg-indigo-700 px-6 py-3 text-white font-bold hover:shadow-lg hover:bg-indigo-900 text-2xl w-max .btn-primary-large rounded-full"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default Categroy
