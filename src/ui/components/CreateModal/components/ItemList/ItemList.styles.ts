import styled from 'styled-components'

import { theme } from 'core/theme'

export const ItemListContainer = styled.div`
  margin: 32px 0 39px 0;
`

export const ItemListHeader = styled.div`
  margin: 16px 0;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  color: ${theme.light.shipCove};
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`

export const ItemContainer = styled.div`
  margin-bottom: 18px;
`

export const ItemListBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  column-gap: 16px;
  align-items: center;
`

export const ItemTotal = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.light.baliHai};
`
