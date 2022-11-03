import { createGlobalStyle } from 'styled-components'

import SpartanBold from 'assets/fonts/Spartan/Spartan-Bold.ttf'
import SpartanMedium from 'assets/fonts/Spartan/Spartan-Medium.ttf'

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Spartan';
    font-style: normal;  
    font-weight: 500;
    src: local(''), url(${SpartanMedium}) format('truetype')
  }
  
  @font-face {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    src: local(''),
    url(${SpartanBold}) format('truetype'), 
  }
`
