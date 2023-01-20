import { FC } from 'react'

import Arrow from 'assets/images/icons/icon-arrow.svg'

import { BackArrow, BackContainer } from './BackButton.styles'

interface BackButtonProps {
  onClick: () => void
}

export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <BackContainer onClick={onClick}>
      <BackArrow src={Arrow} alt="Arrow" /> Go back
    </BackContainer>
  )
}
