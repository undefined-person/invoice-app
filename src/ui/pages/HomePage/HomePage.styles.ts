import styled from 'styled-components'

import { theme } from 'core/theme'
import { Button } from 'ui/common'
import { ButtonStyles } from 'ui/common/Button/Button.styles'

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentHeaderRight = styled.div`
  display: flex;
  column-gap: 40px;
  align-items: center;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    column-gap: 18px;

    ${ButtonStyles} {
      padding: 6px 14px 6px 6px;
    }
  }
`

export const ContentTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const TotalInvoices = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.light.baliHai};
  margin-top: 8px;
`

export const InvoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
