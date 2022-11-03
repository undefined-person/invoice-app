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
