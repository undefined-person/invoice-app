import { FC } from 'react'

import LogoImage from 'assets/images/logo.svg'

import { LogoBottom, LogoIcon, LogoWrapper } from './Logo.styles'

interface LogoProps {
  isRounded?: boolean
  width?: number
}

export const Logo: FC<LogoProps> = ({ isRounded, width }) => {
  return (
    <LogoWrapper isRounded={isRounded} width={width}>
      <LogoBottom />
      <LogoIcon src={LogoImage} alt="Logo" />
    </LogoWrapper>
  )
}
