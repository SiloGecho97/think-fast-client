import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import FeaturesHome from '../partials/Features'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import Testimonials from '../partials/Testimonials'
import Newsletter from '../partials/Newsletter'
import Footer from '../partials/Footer'
const Index = () => {
  return (
    <>
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
      <Footer />
     
    </>
  )
}

export default Index
