import styled from 'styled-components'

import { theme } from 'core/theme'

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
`

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`

export const HeaderLine = styled.hr`
  background-color: ${theme.light.fiord};
  width: 100%;
  height: 1px;
  border: none;
  margin: 32px 0 24px;
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

  button {
    background: none;
    border: none;
    color: ${theme.light.heading};
    cursor: pointer;

    &:hover {
      color: ${theme.light.primary};
    }
  }
`
