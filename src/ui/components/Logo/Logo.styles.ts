import styled from 'styled-components'

import { theme } from 'core/theme'

export const LogoWrapper = styled.div<{ isRounded?: boolean; width?: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.light.primary};
  height: 103px;
  border-radius: ${(props) => (props.isRounded ? '20px' : '0 20px 20px 0')};
  overflow: hidden;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
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
