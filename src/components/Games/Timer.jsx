import React from 'react'
import Countdown from 'react-countdown'

const Completionist = () => (
  <span className="text-2xl font-bold text-red-800 ">Times UP !</span>
)

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <span className="font-black text-primary text-4xl">
        {hours}:{minutes}:{seconds}
      </span>
    )
  }
}

const Timer = () => {
  return (
    <div className="shadow-md w-max my-4 p-4 rounded-xl border shadow-gray-200 border-gray-200">
      <Countdown date={Date.now() + 10000} renderer={renderer} />
    </div>
  )
}

export default Timer
