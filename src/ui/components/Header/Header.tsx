import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'core/hooks'
import { ROUTES } from 'core/constants'
import { logout } from 'core/store/user'

import { Logo } from 'ui/components'

import Moon from 'assets/images/icons/icon-moon.svg'

import {
  Avatar,
  AvatarContainer,
  HeaderBottom,
  HeaderLine,
  HeaderWrapper,
  ThemeButton,
  UserPopup,
} from './Header.styles'

export const Header = () => {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false)

  const { user } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const userPopupData = useMemo(
    () => [
      {
        title: 'Settings',
        onClick: () => navigate(ROUTES.settings),
      },
      {
        title: 'Logout',
        onClick: () => dispatch(logout()),
      },
    ],
    []
  )

  const handleUserPopup = () => {
    setIsUserPopupOpen((prev) => !prev)
  }

  return (
    <HeaderWrapper>
      <Logo />
      <HeaderBottom>
        <ThemeButton>
          <img src={Moon} alt="Theme Icon" />
        </ThemeButton>
        <HeaderLine />
        <AvatarContainer>
          <Avatar onClick={handleUserPopup}>{user?.username.charAt(0).toUpperCase()}</Avatar>
          {isUserPopupOpen ? (
            <UserPopup>
              {userPopupData.map(({ title, onClick }) => (
                <button key={title} onClick={onClick}>
                  {title}
                </button>
              ))}
            </UserPopup>
          ) : null}
        </AvatarContainer>
      </HeaderBottom>
    </HeaderWrapper>
  )
}
