import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from '../pages/ForgotPassword'
import Index from '../pages/Index'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import history from './history'
import Intro from '../pages/Games/Intro'
import Play from '../pages/Games/Play'
// import PrivateRoute from './PrivateRoute'

const Router = () => {
  return (
    <div>
      <BrowserRouter history={history}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Intro />} />
          <Route path="/games/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
