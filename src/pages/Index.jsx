import React, { useRef, useState } from 'react'
import HeroHome from '../partials/HeroHome'
import FeaturesHome from '../partials/Features'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import Footer from '../partials/Footer'
import LandingHeader from '../partials/LandingHeader'
import { useEffect } from 'react'
import { getUserFromStorage } from '../_services/user.service'
import { useNavigate } from 'react-router-dom'
const Index = () => {
  const navigate = useNavigate()
  const [defferedPrompt, setDefferedPrompt] = useState(null)
  const installRef = useRef()
  useEffect(() => {
    const addbtn = document.querySelector('.btn')

    const handleBeforePrompt = (event) => {
      event.preventDefault()
      setDefferedPrompt(event)
      addbtn.style.display = 'block'
      installRef.current.click()
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
    if (getUserFromStorage()) {
      navigate('/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <LandingHeader />
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
      <Footer />

      <section className="mx-auto w-full flex justify-center my-16">
        <label
          for="my-modal"
          ref={installRef}
          className="btn btn-primary btn-lg btn-wide hidden "
        >
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
    </>
  )
}

export default Index
