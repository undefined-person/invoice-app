import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IInvoiceListItem } from 'core/models'
import { InvoiceStatus } from 'ui/common'

import Arrow from 'assets/images/icons/icon-arrow.svg'

import {
  InvoiceActions,
  InvoiceClient,
  InvoiceDate,
  InvoiceId,
  InvoiceItemContainer,
  InvoiceTotal,
} from './InvoiceList.styles'

export const InvoiceItem: FC<IInvoiceListItem> = ({ clientName, orderId, paymentDue, status, total }) => {
  const navigate = useNavigate()

  const handleInvoiceClick = () => {
    navigate({
      pathname: `/invoice/${orderId}`,
    })
  }

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
