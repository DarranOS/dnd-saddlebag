import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from 'hooks'
import { Spinner } from 'components'

// If the user is logged in, returns the OUTLET (children).
// Else navigate to Sign-in page.

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute
