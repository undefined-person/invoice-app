import { FC } from 'react'

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
  return (
    <InvoiceItemContainer>
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
