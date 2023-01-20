import styled from 'styled-components'

import { theme } from 'core/theme'

const handleBackgroundColor = (backgroundColor: string) => {
  switch (backgroundColor) {
    case 'sky':
      return theme.light.selago
    case 'primary':
      return theme.light.lightViolet
    case 'coral':
      return '#FF9797'
    case 'header':
      return theme.light.heading
    default:
      return theme.light.lightViolet
  }
}

export const ButtonStyles = styled.button<{
  backgroundColor: string
  isFullWidth?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 24px;
  height: 48px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  background-color: ${(props) => props.backgroundColor && theme.light[props.backgroundColor]};
  cursor: pointer;
  color: ${(props) => (props.backgroundColor === 'sky' ? theme.light.shipCove : theme.light.white)};
  transition: opacity 0.2s;
  width: ${(props) => (props.isFullWidth ? '100%' : 'min-content')};
  padding: 17px 24px;
  transition: background-color 0.25s;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => props.backgroundColor && handleBackgroundColor(props.backgroundColor)};
  }
`
