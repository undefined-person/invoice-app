import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IInvoiceListItem } from 'core/models'
import { useWindowResize } from 'core/hooks'
import { InvoiceStatus } from 'ui/common'

import Arrow from 'assets/images/icons/icon-arrow.svg'

import {
  InvoiceActions,
  InvoiceClient,
  InvoiceDate,
  InvoiceId,
  InvoiceItemContainer,
  InvoiceItemMobileContainer,
  InvoiceTotal,
} from './InvoiceList.styles'
import { resolutions } from 'core/constants'

export const InvoiceItem: FC<IInvoiceListItem> = ({ clientName, orderId, paymentDue, status, total }) => {
  const navigate = useNavigate()
  const { width } = useWindowResize()

  const handleInvoiceClick = () => {
    navigate({
      pathname: `/invoice/${orderId}`,
    })
  }

  if (width > resolutions.mobile) {
    return (
      <InvoiceItemContainer onClick={handleInvoiceClick}>
        <InvoiceId>
          <span>#</span>
          {orderId}
        </InvoiceId>
        <InvoiceDate>
          <span>Due</span> {paymentDue}
        </InvoiceDate>
        <InvoiceClient>{clientName}</InvoiceClient>
        <InvoiceTotal>£ {total}</InvoiceTotal>
        <InvoiceStatus status={status}>
          <span>{status}</span>
        </InvoiceStatus>
        <InvoiceActions>
          <img src={Arrow} alt="Arrow" />
        </InvoiceActions>
      </InvoiceItemContainer>
    )
  }

  return (
    <InvoiceItemContainer onClick={handleInvoiceClick}>
      <InvoiceItemMobileContainer>
        <InvoiceId>
          <span>#</span>
          {orderId}
        </InvoiceId>
        <InvoiceClient>{clientName}</InvoiceClient>
      </InvoiceItemMobileContainer>
      <InvoiceItemMobileContainer>
        <div>
          <InvoiceDate>
            <span>Due</span> {paymentDue}
          </InvoiceDate>
          <InvoiceTotal>£ {total}</InvoiceTotal>
        </div>
        <InvoiceStatus status={status}>
          <span>{status}</span>
        </InvoiceStatus>
      </InvoiceItemMobileContainer>
    </InvoiceItemContainer>
  )
}
