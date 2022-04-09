import { useEffect, useState } from 'react'
import { FaGamepad, FaHome } from 'react-icons/fa'
import { BiMoney, BiUserCircle } from 'react-icons/bi'
import './App.css'
import Router from './routes/Routes'
import { getUserFromStorage } from './_services/user.service'

function App() {
  const [user, setUser] = useState(getUserFromStorage())
  const [defferedPrompt, setDefferedPrompt] = useState(null)
  useEffect(() => {
    const addbtn = document.querySelector('.btn')

    const handleBeforePrompt = (event) => {
      event.preventDefault()
      setDefferedPrompt(event)
      addbtn.style.display = 'block'
    }
    window.addEventListener('beforeinstallprompt', handleBeforePrompt)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforePrompt)
    }
  }, [])

  const installApp = () => {
    if (!defferedPrompt) {
      console.log('prompt event is not intiatied')
      return
    }
    defferedPrompt.prompt()

    defferedPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('user accepted the prompt')
      }
      setDefferedPrompt(null)
    })
  }

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
            <a href="/game/intro">
              <FaGamepad />
            </a>

            <a href="/withdraw">
              <BiMoney />
            </a>
            <a href="/user">
              <BiUserCircle />
            </a>
          </div>
        </div>
      )}

      <section className="mx-auto w-full flex justify-center my-16">
        <label for="my-modal" className="btn btn-primary btn-lg btn-wide ">
          Install
        </label>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Install as Application</h3>
            <p className="py-4">
              Inorder to easily access this web, install the application to you
              mobile.
            </p>
            <div className="modal-action">
              <label for="my-modal" className="btn">
                Cancel
              </label>
              <label
                for="my-modal"
                className="btn"
                onClick={(e) => installApp()}
              >
                Ok!
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
