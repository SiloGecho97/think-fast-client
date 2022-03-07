import { useEffect, useState } from 'react'
import './App.css'
import Footer from './partials/Footer'
import Router from './routes/Routes'
import { getUserFromStorage } from './_services/user.service'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser(getUserFromStorage())
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
