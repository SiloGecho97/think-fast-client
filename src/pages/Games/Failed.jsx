import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Global/Button'

const FailedAnswer = () => {
  return (
    <div className="bg-primary text-white h-screen flex flex-col items-center justify-center">
    <h1 className="text-8xl font-bold">Wrong Answer</h1>
    <h4>You can play again other category question.</h4>
    <p className="text-3xl text-blue-100">
    </p>
    <Link to="/games" className="my-4">
      <Button variant="secondary" pill={true} size="extra">
        Play Again
      </Button>
    </Link>
  </div>
  )
}

export default FailedAnswer