import styled from 'styled-components'

import { theme } from 'core/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 880px;
  margin: 0 auto;
  max-height: 100vh;
  padding: 72px 20px 0 130px;
  width: 100%;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    max-width: none;
    max-height: calc(100vh - 80px);
    padding: 72px 48px 0 48px;
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: 32px 24px 0 24px;
  }
`
