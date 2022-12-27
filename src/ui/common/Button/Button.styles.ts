import styled from 'styled-components'

import { theme } from 'core/theme'

export const ButtonStyles = styled.button<{
  backgroundColor: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: 'Spartan', sans-serif;
  border-radius: 24px;
  height: 48px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  background-color: ${(props) => props.backgroundColor && theme.light[props.backgroundColor]};
  cursor: pointer;
  color: ${theme.light.white};
  transition: opacity 0.2s;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`
