import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { BaseTheme, theme, FontStyles } from 'core/theme'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BaseTheme />
      <FontStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
