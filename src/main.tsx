import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { BaseTheme, theme, FontStyles } from 'core/theme'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <BaseTheme />
        <FontStyles />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)
