import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Global/Button'
import { getInfo } from '../../_services/user.service'

const ChampionFinish = () => {
  const [info, setInfo] = useState(getInfo())

  return (
    <div className="bg-primary text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">Congratulations </h1>
      <h4>You finished all this week quata</h4>
      <p className="text-3xl text-blue-100">
        You collect  {info.championsPt}
      </p>
      <Link to="/home" className="my-4">
        <Button variant="secondary" pill={true} size="extra">
          Return to Home
        </Button>
      </Link>
    </div>
  )
}

export default ChampionFinish
