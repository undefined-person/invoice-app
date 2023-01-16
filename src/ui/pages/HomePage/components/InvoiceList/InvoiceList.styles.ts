import styled from 'styled-components'

import { InvoiceStatus } from 'ui/common'
import { theme } from 'core/theme'

export const InvoicesList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 65px;
  overflow-y: auto;
`

export const InvoiceItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 2fr) 104px 0.5fr;
  align-items: center;
  background: ${theme.light.white};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  padding: 25px;
  cursor: pointer;

  ${InvoiceStatus} {
    width: 100%;
  }
`

export const InvoiceId = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${theme.light.heading};

  span {
    color: ${theme.light.shipCove};
  }
`

export const InvoiceDate = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${theme.light.shipCove};
  justify-self: center;

  span {
    color: ${theme.light.baliHai};
  }
`

export const InvoiceClient = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${theme.light.steel};
  justify-self: center;
`

export const InvoiceTotal = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  letter-spacing: -0.8px;
  color: ${theme.light.heading};
  justify-self: center;
`

export const InvoiceActions = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  justify-self: end;

  img {
    transform: rotate(-90deg);
  }
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(80vh);
`

export const EmptyTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.625px;
  color: ${theme.light.heading};
  margin-top: 64px;
`

export const EmptySubtitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.25px;
  color: ${theme.light.baliHai};
  margin-top: 24px;
  max-width: 220px;

  span {
    font-weight: 700;
  }
`
