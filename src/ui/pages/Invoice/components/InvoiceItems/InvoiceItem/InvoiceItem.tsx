import { FC } from 'react'

import { IInvoiceItem } from 'core/models'

import { InvoiceItemContainer } from '../InvoiceItems.styles'
import { InvoiceItemDark, InvoiceItemLight } from './InvoiceItem.styles'

export const InvoiceItem: FC<IInvoiceItem> = ({ name, price, quantity, total }) => {
  return (
    <InvoiceItemContainer>
      <InvoiceItemDark>{name}</InvoiceItemDark>
      <InvoiceItemLight>{quantity}</InvoiceItemLight>
      <InvoiceItemLight>£ {price}</InvoiceItemLight>
      <InvoiceItemDark>£ {total}</InvoiceItemDark>
    </InvoiceItemContainer>
  )
}
