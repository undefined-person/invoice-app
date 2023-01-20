import styled from 'styled-components'

import { theme } from 'core/theme'

export const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    & > *:last-child {
      grid-column: 1 / -1;
      row-gap: 24px;
    }
  }
`
