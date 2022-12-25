import { useNavigate, useRoutes } from 'react-router-dom'
import { useEffect } from 'react'

import { ROUTES } from 'core/constants'
import { SignUp, SignIn, HomePage } from 'ui/pages'
import { useAppDispatch, useAppSelector } from 'core/hooks'
import { checkAuth } from 'core/store/user'

function App() {
  const dispatch = useAppDispatch()
  const { user, accessToken } = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken) {
      dispatch(checkAuth())
    }
  }, [])

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.signIn)
    } else {
      navigate(ROUTES.home)
    }
  }, [user])

  const routes = useRoutes([
    { path: ROUTES.home, element: <HomePage /> },
    { path: ROUTES.signUp, element: <SignUp /> },
    { path: ROUTES.signIn, element: <SignIn /> },
  ])

  return routes
}

export default App
