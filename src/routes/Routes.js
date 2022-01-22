import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import history from './history'
// import PrivateRoute from './PrivateRoute'

const Router = () => {
    return (
      <div>
        <BrowserRouter history={history}>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/login" element={<Login />}/>
            {/* <PrivateRoute path="/private_game" component={Game} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  export default Router