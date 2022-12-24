import React, { FC } from 'react'
import { ButtonStyles } from './Button.styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'red' | 'grey'
}

export const Button: FC<ButtonProps> = ({ children, color }) => {
  return <ButtonStyles backgroundColor={color}>{children}</ButtonStyles>
}
