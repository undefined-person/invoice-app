import React from 'react'

import Logo from 'assets/images/logo.svg'
import Moon from 'assets/images/icons/icon-moon.svg'
import UserImage from 'assets/images/image-avatar.jpg'

import {
  Avatar,
  HeaderBottom,
  HeaderLine,
  HeaderWrapper,
  LogoBottom,
  LogoIcon,
  LogoWrapper,
  ThemeButton,
} from './Header.styles'

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoBottom />
        <LogoIcon src={Logo} alt="Logo" />
      </LogoWrapper>
      <HeaderBottom>
        <ThemeButton>
          <img src={Moon} alt="Theme Icon" />
        </ThemeButton>
        <HeaderLine />
        <Avatar src={UserImage} />
      </HeaderBottom>
    </HeaderWrapper>
  )
}
