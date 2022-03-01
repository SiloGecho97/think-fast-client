import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const GuardedRoute = ({ component: Component, ...rest }) => {
  let user = JSON.parse(localStorage.getItem('user'))

  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.role === 'user' ? (
          <Component {...props} />
        ) : user && user.role === 'admin' ? (
          <Redirect to="/admin" />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  )
}

export default GuardedRoute
