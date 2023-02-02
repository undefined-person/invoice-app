import { FC } from 'react'

import { IInvoiceItem } from 'core/models'
import { useWindowResize } from 'core/hooks'
import { resolutions } from 'core/constants'

import { InvoiceItem } from './InvoiceItem/InvoiceItem'

import {
  InvoiceItemContainer,
  InvoiceItemInfo,
  InvoiceItemHeader,
  InvoiceItemWrapper,
  InvoiceItemTotal,
  InvoiceAmountDue,
  InvoiceTotal,
} from './InvoiceItems.styles'

interface InvoiceItemsProps {
  invoiceItems: IInvoiceItem[]
  total: number
}

export const InvoiceItems: FC<InvoiceItemsProps> = ({ invoiceItems, total }) => {
  const { width } = useWindowResize()

  return (
    <InvoiceItemWrapper>
      <InvoiceItemInfo>
        {width > resolutions.mobile ? (
          <InvoiceItemContainer>
            <InvoiceItemHeader>Item Name</InvoiceItemHeader>
            <InvoiceItemHeader>QTY.</InvoiceItemHeader>
            <InvoiceItemHeader>Price</InvoiceItemHeader>
            <InvoiceItemHeader>Total</InvoiceItemHeader>
          </InvoiceItemContainer>
        ) : null}
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
