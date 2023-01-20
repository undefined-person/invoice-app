import styled from 'styled-components'

import { theme } from 'core/theme'

export const DashboardLayoutContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`
