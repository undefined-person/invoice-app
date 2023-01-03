import styled from 'styled-components'

import { theme } from 'core/theme'

export const InvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BackContainer = styled.button`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
`

export const BackArrow = styled.img`
  transform: rotate(90deg);
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${theme.light.white};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  padding: 24px 32px;
  margin-top: 32px;
`

export const Status = styled.div`
  display: flex;
  column-gap: 16px;
  width: 100%;
  align-items: center;

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${theme.light.steel};
  }
`

export const InvoiceControl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 131px;
  column-gap: 8px;
`

export const InvoiceInfo = styled.div`
  margin-top: 24px;
  background: ${theme.light.white};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  padding: 48px;
`

export const InvoiceInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InvoiceInfoTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const InvoiceInfoTopRight = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 11px;
    text-align: right;
    line-height: 18px;
  }
`

export const OrderId = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: ${theme.light.heading};

  span {
    color: ${theme.light.baliHai};
  }
`

export const InvoiceInfoCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
`

export const InvoiceDate = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
`

export const InvoiceClientAddress = styled.div`
  margin-top: 8px;
`

export const InvoiceClientEmail = styled.div`
  justify-self: center;
`
