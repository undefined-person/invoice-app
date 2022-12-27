import { useAppSelector } from 'core/hooks'
import { Logo } from 'ui/components'

import Moon from 'assets/images/icons/icon-moon.svg'

import { Avatar, HeaderBottom, HeaderLine, HeaderWrapper, ThemeButton } from './Header.styles'

export const Header = () => {
  const { user } = useAppSelector((state) => state.user)

  return (
    <HeaderWrapper>
      <Logo />
      <HeaderBottom>
        <ThemeButton>
          <img src={Moon} alt="Theme Icon" />
        </ThemeButton>
        <HeaderLine />
        <Avatar>{user?.username.charAt(0).toUpperCase()}</Avatar>
      </HeaderBottom>
    </HeaderWrapper>
  )
}
