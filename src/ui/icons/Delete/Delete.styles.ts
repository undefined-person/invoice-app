import styled from 'styled-components'

import { theme } from 'core/theme'

export const DeleteWrapper = styled.svg`
  path {
    transition: fill 0.25s ease-in-out;
  }

  &:hover path {
    fill: ${theme.light.coral};
  }
`
