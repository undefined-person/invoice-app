import { useRoutes } from 'react-router-dom'

import { ROUTES } from 'core/constants'
import { SignUp, SignIn, HomePage } from 'ui/pages'

function App() {
  const routes = useRoutes([
    { path: ROUTES.home, element: <HomePage /> },
    { path: ROUTES.signUp, element: <SignUp /> },
    { path: ROUTES.signIn, element: <SignIn /> },
  ])

  return routes
}

export default App
