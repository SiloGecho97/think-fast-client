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
import TrialPlay from '../pages/trial/TrialPlay'
import FinishTrial from '../pages/trial/FinishTrial'
import VerifyPhone from '../pages/VerifyPhone'
import ChampionsPlay from '../pages/quizes/Play'
import Withdraw from '../pages/Withdraw'
import ChampionFinish from '../pages/quizes/Finish'
import FailedAnswer from '../pages/Games/Failed'
import Profile from '../pages/Profile/Profile'
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
          <Route path="/verify" element={<VerifyPhone />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/play" element={<ChampionsPlay />} />
          <Route path="/quiz/finish" element={<ChampionFinish />} />
          <Route path="/games" element={<Intro />} />
          <Route path="/games/category" element={<Categroy />} />
          <Route path="/games/play" element={<Play />} />
          <Route path="/games/failed" element={<FailedAnswer />} />
          <Route path="/games/finish" element={<Congratulations />} />
          <Route path="/trial/play" element={<TrialPlay />} />
          <Route path="/trial/finish" element={<FinishTrial />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
