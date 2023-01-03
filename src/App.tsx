import { useNavigate, useRoutes } from 'react-router-dom'
import { useEffect } from 'react'

import { ACCESS_TOKEN, ROUTES } from 'core/constants'
import { SignUp, SignIn, HomePage, Settings, Invoice } from 'ui/pages'
import { useAppDispatch, useAppSelector } from 'core/hooks'
import { checkAuth } from 'core/store/user'

function App() {
  const dispatch = useAppDispatch()
  const { user, accessToken } = useAppSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(checkAuth())
  }, [accessToken])

  const routes = useRoutes([
    { path: ROUTES.home, element: <HomePage /> },
    { path: ROUTES.signUp, element: <SignUp /> },
    { path: ROUTES.signIn, element: <SignIn /> },
    { path: ROUTES.settings, element: <Settings /> },
    { path: ROUTES.invoice, element: <Invoice /> },
  ])

  return routes
}

export default App
