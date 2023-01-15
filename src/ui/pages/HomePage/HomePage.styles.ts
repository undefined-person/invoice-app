import styled from 'styled-components'

import { theme } from 'core/theme'

export const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  width: 100%;
`

export const ContentTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const TotalInvoices = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${theme.light.baliHai};
  margin-top: 8px;
`

export const InvoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 65px;
`

export const AddInvoice = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  background-color: ${theme.light.white};
  color: ${theme.light.primary};
  margin-right: 16px;
  font-size: 22px;
  font-weight: 700;
`
