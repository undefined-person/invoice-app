import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { BaseTheme, theme, FontStyles } from 'core/theme'
import { setupStore } from 'core/store'

import App from './App'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BaseTheme />
          <FontStyles />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>
)
