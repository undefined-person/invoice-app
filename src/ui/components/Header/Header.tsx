import Moon from 'assets/images/icons/icon-moon.svg'
import UserImage from 'assets/images/image-avatar.jpg'

import { Logo } from 'ui/components'

import {
  Avatar,
  HeaderBottom,
  HeaderLine,
  HeaderWrapper,
  ThemeButton,
} from './Header.styles'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
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
