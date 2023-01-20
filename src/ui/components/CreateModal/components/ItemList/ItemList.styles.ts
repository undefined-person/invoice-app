import styled from 'styled-components'

import { theme } from 'core/theme'

export const ItemContainer = styled.div`
  margin-bottom: 18px;
`

export const ItemListContainer = styled.div`
  margin: 32px 0 39px 0;

  & ${ItemContainer}:first-of-type {
    margin-top: 16px;
  }
`

export const ItemListHeader = styled.div`
  margin: 16px 0;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  color: ${theme.light.shipCove};
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`

export const ItemGroup = styled.div`
  display: grid;
  row-gap: 16px;
  align-items: center;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-rows: 1fr 3fr;

    &:nth-child(1) {
      grid-column: 1 / -1;
    }
  }
`

export const ItemListBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  column-gap: 16px;
  align-items: center;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 2fr 1fr 0.5fr;
    row-gap: 24px;
  }
`

export const ItemTotal = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.light.baliHai};
`

export const ItemLabel = styled.span`
  display: none;
  color: ${theme.light.shipCove};
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`
