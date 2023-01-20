import styled from 'styled-components'

import { theme } from 'core/theme'

export const InvoiceGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`

export const InvoiceTitle = styled.h3`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${theme.light.heading};
`
