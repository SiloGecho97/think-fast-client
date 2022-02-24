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
import Categroy from '../pages/Games/Categroy'
import Congratulations from '../pages/Games/Congratulations'
import Quiz from '../pages/quizes/Quiz'
import Privacy from '../pages/Privacy'
// import PrivateRoute from './PrivateRoute'

const Router = () => {
  return (
    <div>
      <BrowserRouter history={history}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/play" element={<Play />} />
          <Route path="/games" element={<Intro />} />
          <Route path="/games/category" element={<Categroy />} />
          <Route path="/games/play" element={<Play />} />
          <Route path="/games/finish" element={<Congratulations />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
