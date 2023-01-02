import { createGlobalStyle } from 'styled-components'

import OpenSansMedium from 'assets/fonts/OpenSans/OpenSans-Medium.ttf'
import OpenSansBold from 'assets/fonts/OpenSans/OpenSans-Bold.ttf'

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans';
    font-style: normal;  
    font-weight: 500;
    src: local(''), url(${OpenSansMedium}) format('truetype')
  }
  
  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
    url(${OpenSansBold}) format('truetype'), 
  }
  
`
