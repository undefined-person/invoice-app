import React, { FC } from 'react'

import { TitleStyles } from './Title.styles'

interface TitleProps {
  title: string
}

export const Title: FC<TitleProps> = ({ title }) => {
  return <TitleStyles>{title}</TitleStyles>
}
