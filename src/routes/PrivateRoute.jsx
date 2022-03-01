import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserFromStorage } from '../_services/user.service'

const PrivateRoute = ({ path, element }) => {
  const authed = getUserFromStorage()
  const location = useLocation()

  return authed ? (
    <PrivateRoute path={path} element={element} />
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}

export default PrivateRoute
