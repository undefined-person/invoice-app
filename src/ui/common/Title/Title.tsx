import React, { FC } from 'react'

import { TitleStyles } from './Title.styles'

interface TitleProps {
  title: string
  size: 'small' | 'medium' | 'large'
}

export const Title: FC<TitleProps> = ({ title, size }) => {
  return <TitleStyles size={size}>{title}</TitleStyles>
}
