import styled from 'styled-components'

import { theme } from 'core/theme'

export const InvoiceItemText = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;

  &:nth-child(3),
  &:nth-child(4) {
    text-align: right;
  }
`

export const InvoiceItemDark = styled(InvoiceItemText)`
  color: ${theme.light.heading};
`

export const InvoiceItemLight = styled(InvoiceItemText)`
  color: ${theme.light.shipCove};
`
