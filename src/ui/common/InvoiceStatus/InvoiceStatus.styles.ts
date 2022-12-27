import styled from 'styled-components'
import { IInvoiceStatus } from 'core/models'

import { theme } from 'core/theme'

const handleColor = (status: IInvoiceStatus) => {
  switch (status) {
    case 'paid':
      return theme.light.mint
    case 'pending':
      return theme.light.peach
    case 'draft':
      return theme.light.header
    default:
      return theme.light.header
  }
}

export const InvoiceStatus = styled.div<{ status: IInvoiceStatus }>`
  color: ${({ status }) => handleColor(status)};
  text-transform: capitalize;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  position: relative;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;

  &::after {
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ status }) => handleColor(status)};
    mix-blend-mode: normal;
    opacity: 0.06;
    border-radius: 6px;
  }

  &::before {
    content: '';
    background-color: ${({ status }) => handleColor(status)};
    height: 8px;
    width: 8px;
    border-radius: 32px;
  }
`
