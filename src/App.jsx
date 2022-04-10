import { useEffect, useState } from 'react'
import { FaGamepad, FaHome } from 'react-icons/fa'
import { BiMoney, BiUserCircle } from 'react-icons/bi'
import './App.css'
import Router from './routes/Routes'
import { getUserFromStorage } from './_services/user.service'

function App() {
  const [user, setUser] = useState(getUserFromStorage())

  useEffect(() => {
    setUser(getUserFromStorage())
  }, [])
  return (
    <div className="App">
      <Router />
      {user && (
        <div className="fixed lg:hidden bottom-0  p-4 bg-indigo-900 text-gray-100 w-full  shadow-inner">
          <div className="flex justify-around text-4xl">
            <a href="/home">
              <FaHome />
            </a>
            <a href="/games">
              <FaGamepad />
            </a>

            <a href="/withdraw">
              <BiMoney />
            </a>
            <a href="/profile">
              <BiUserCircle />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
