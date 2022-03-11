import { useEffect, useState } from 'react'
import { FaGamepad, FaHome } from 'react-icons/fa'
import { BiMoney } from 'react-icons/bi'
import './App.css'
import Router from './routes/Routes'
import { getUserFromStorage } from './_services/user.service'
import { Link } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser(getUserFromStorage())
  }, [])
  console.log(user)
  return (
    <div className="App">
      <Router />
      {user && (
        <div className="fixed lg:hidden bottom-0 p-4 bg-gray-100 text-gray-900 w-full shadow-md">
          <div className="flex justify-around text-4xl">
            <a href="/home">
              <FaHome />
            </a>
            <a href="/game/intro">
              <FaGamepad />
            </a>

            <a href="/withdraw">
              <BiMoney />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
