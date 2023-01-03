import { FC } from 'react'

import { IInvoiceItem } from 'core/models'

import {
  InvoiceItemContainer,
  InvoiceItemInfo,
  InvoiceItemHeader,
  InvoiceItemWrapper,
  InvoiceItemTotal,
  InvoiceAmountDue,
  InvoiceTotal,
} from './InvoiceItems.styles'
import { InvoiceItem } from './InvoiceItem/InvoiceItem'

interface InvoiceItemsProps {
  invoiceItems: IInvoiceItem[]
  total: string
}

export const InvoiceItems: FC<InvoiceItemsProps> = ({ invoiceItems, total }) => {
  return (
    <InvoiceItemWrapper>
      <InvoiceItemInfo>
        <InvoiceItemContainer>
          <InvoiceItemHeader>Item Name</InvoiceItemHeader>
          <InvoiceItemHeader>QTY.</InvoiceItemHeader>
          <InvoiceItemHeader>Price</InvoiceItemHeader>
          <InvoiceItemHeader>Total</InvoiceItemHeader>
        </InvoiceItemContainer>
        {invoiceItems.map((item, index) => (
          <InvoiceItem key={index} {...item} />
        ))}
      </InvoiceItemInfo>
      <InvoiceItemTotal>
        <InvoiceAmountDue>Amount Due</InvoiceAmountDue>
        <InvoiceTotal>£ {total}</InvoiceTotal>
      </InvoiceItemTotal>
    </InvoiceItemWrapper>
  )
}
