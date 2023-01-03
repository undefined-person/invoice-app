import styled from 'styled-components'

import { theme } from 'core/theme'

export const InvoiceItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const InvoiceItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.light.sky};
  padding: 32px 32px 40px 32px;
  margin-top: 45px;
  border-radius: 8px 8px 0px 0px;
`

export const InvoiceItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;

  &:not(:first-child) {
    padding-top: 20px;
  }

  & > *:nth-last-child(-n + 3) {
    justify-self: center;
  }
`

export const InvoiceItemHeader = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.229167px;
  color: ${theme.light.shipCove};
`

export const InvoiceItemTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.light.header};
  padding: 32px;
  border-radius: 0px 0px 8px 8px;
`

export const InvoiceAmountDue = styled.span`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.229167px;
  color: ${theme.light.white};
`

export const InvoiceTotal = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  letter-spacing: -0.5px;
  color: ${theme.light.white};
`
