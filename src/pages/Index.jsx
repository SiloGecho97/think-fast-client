import React from 'react'
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
    </>
  )
}

export default Index
