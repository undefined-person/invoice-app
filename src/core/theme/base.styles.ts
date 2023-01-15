import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { theme } from './theme.styles'

export const BaseTheme = createGlobalStyle`

  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    width: 100%;
    font-family: 'OpenSans', sans-serif;
    color: ${theme.light.heading};
    background-color: ${theme.light.background};
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'OpenSans', sans-serif;
    color: ${theme.light.heading};
  }


  //Calendar

  .react-datepicker {
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    border-radius: 8px;
    border: none;
  }

  .react-datepicker__day--outside-month {
    opacity: 0.3;
  }

 .react-datepicker__day:hover {
    background-color: ${theme.light.primary};
   color: ${theme.light.white};
   font-weight: 500;
  }

  .react-datepicker__day--selected:hover{
    background-color: ${theme.light.lightViolet};
  }

  .react-datepicker__header {
    border: none;
    padding: 25px 0;
    background-color: ${theme.light.white};
  }

  .react-datepicker__day-names,
  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation {
    top: 20px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${theme.light.primary};
  }

  .react-datepicker__navigation:hover *::before {
     border-color: ${theme.light.lightViolet};
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--selected {
    background: none;
    color: ${theme.light.primary}
  }

  .calendar {
    border-radius: 4px;
    padding: 17px 20px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    width: 100%;
    color: ${theme.light.heading};
    outline: none;
    cursor: pointer;


    &:focus {
      border: 1px solid ${theme.light.lightViolet};
    }

    &:not(:focus) {
      border: 1px solid ${theme.light.selago};
    }
  }

  .calendar,
  .react-datepicker__current-month,
  .react-datepicker__day {
    font-family: 'OpenSans', sans-serif;
    font-weight: 700;
    color: ${theme.light.heading};
  }
`
