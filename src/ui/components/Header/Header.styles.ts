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
`

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.light.primary};
  height: 103px;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
`

export const LogoBottom = styled.div`
  background-color: ${theme.light.lightViolet};
  position: absolute;
  height: 103px;
  width: 100%;
  top: 52px;
  border-radius: 20px 0 20px 0;
`

export const LogoIcon = styled.img`
  z-index: 5;
  width: 40px;
  height: 40px;
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

export const Avatar = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
