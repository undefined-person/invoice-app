import React, { FC } from 'react'
import { ButtonStyles } from './Button.styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'coral' | 'sky'
}

export const Button: FC<ButtonProps> = ({ children, color, onClick, disabled }) => {
  return (
    <ButtonStyles onClick={onClick} disabled={disabled} backgroundColor={color}>
      {children}
    </ButtonStyles>
  )
}
