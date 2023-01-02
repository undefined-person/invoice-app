import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { theme } from './theme.styles'

export const BaseTheme = createGlobalStyle`

  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
  }
  
  body {
    width: 100%;
    height: 100vh;
    font-family: 'OpenSans';
    color: ${theme.light.heading};
    background-color: ${theme.light.background};
    overflow-y: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'OpenSans';
    color: ${theme.light.heading};
  }
`
