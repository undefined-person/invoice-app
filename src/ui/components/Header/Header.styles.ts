import styled from 'styled-components'

import { theme } from 'core/theme'
import { LogoWrapper } from '../Logo/Logo.styles'

export const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 103px;
  height: 100%;
  background-color: ${theme.light.header};
  border-radius: 0 20px 20px 0;
  padding-bottom: 24px;
  z-index: 1001;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    border-radius: 0;
    padding-right: 20px;

    ${LogoWrapper} {
      width: 80px;
      height: 80px;
    }
  }
`

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`

export const HeaderLine = styled.hr`
  background-color: ${theme.light.fiord};
  width: 100%;
  height: 1px;
  border: none;
  margin: 32px 0 24px;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 1px;
    height: 80px;
    margin: 0;
    margin: 0 24px;
  }
`

export const Avatar = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: ${theme.light.primary};
  color: ${theme.light.white};
  cursor: pointer;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    height: 32px;
    width: 32px;
  }
`

export const AvatarContainer = styled.div`
  position: relative;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const UserPopup = styled.div`
  position: absolute;
  display: block;
  top: -30px;
  right: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.light.white};
  border-radius: 8px;
  padding: 16px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  row-gap: 8px;
  width: min-content;
  height: min-content;

  button {
    background: none;
    border: none;
    color: ${theme.light.heading};
    cursor: pointer;

    &:hover {
      color: ${theme.light.primary};
    }
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    bottom: -300px;
    top: 0;
    right: 0;
    left: -30px;
  }
`
