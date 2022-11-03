import React, { FC } from 'react'
import { ButtonStyles } from './Button.styles'

interface ButtonProps {
  type: 'primary' | 'red' | 'grey'
  children: React.ReactNode
}

export const Button: FC<ButtonProps> = ({ children, type }) => {
  return <ButtonStyles backgroundColor={type}>{children}</ButtonStyles>
}
