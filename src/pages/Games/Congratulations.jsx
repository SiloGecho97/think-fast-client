import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Global/Button'

const Congratulations = () => {
  return (
    <div className="bg-primary text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">Congratulations</h1>
      <p className="text-3xl text-blue-100">
        You Answer <b className="text-5xl font-black text-yellow-600">3</b>{' '}
        points
      </p>
      <Link to="/games" className="my-4">
        <Button variant="secondary" pill={true} size="extra">
          Next Round
        </Button>
      </Link>
    </div>
  )
}

export default Congratulations
