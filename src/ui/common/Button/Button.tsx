import React, { FC } from 'react'
import { ButtonStyles } from './Button.styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'coral' | 'sky' | 'header'
  isFullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({ children, color, onClick, disabled, type, isFullWidth }) => {
  return (
    <ButtonStyles isFullWidth={isFullWidth} type={type} onClick={onClick} disabled={disabled} backgroundColor={color}>
      {children}
    </ButtonStyles>
  )
}
