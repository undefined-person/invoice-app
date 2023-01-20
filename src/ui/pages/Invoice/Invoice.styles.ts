import styled from 'styled-components'

import { theme } from 'core/theme'

export const InvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    color: ${theme.light.steel};
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    justify-content: space-between;
  }
`

export const InvoiceControl = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 8px;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    position: fixed;
    bottom: 0;
    justify-items: center;
    align-items: center;
    padding: 22px 24px;
    background: ${theme.light.white};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    width: 100%;
  }
`

export const InvoiceInfo = styled.div`
  margin-top: 24px;
  background: ${theme.light.white};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  padding: 48px;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: 24px 24px 150px 24px;
  }
`

export const InvoiceInfoTop = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;
  }
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

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    align-items: flex-start;
  }
`

export const OrderId = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.light.heading};

  span {
    color: ${theme.light.baliHai};
  }
`

export const InvoiceInfoCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 31px;
  }
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

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    justify-self: start;
    margin-top: 32px;
  }
`
