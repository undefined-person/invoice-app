import { FC } from 'react'

import { IInvoiceItem } from 'core/models'
import { useWindowResize } from 'core/hooks'
import { resolutions } from 'core/constants'

import { InvoiceItemContainer, InvoiceItemMobile } from '../InvoiceItems.styles'
import { InvoiceItemDark, InvoiceItemLight } from './InvoiceItem.styles'

export const InvoiceItem: FC<IInvoiceItem> = ({ name, price, quantity, total }) => {
  const { width } = useWindowResize()

  if (width > resolutions.mobile) {
    return (
      <InvoiceItemContainer>
        <InvoiceItemDark>{name}</InvoiceItemDark>
        <InvoiceItemLight>{quantity}</InvoiceItemLight>
        <InvoiceItemLight>£ {price}</InvoiceItemLight>
        <InvoiceItemDark>£ {total}</InvoiceItemDark>
      </InvoiceItemContainer>
    )
  }

  return (
    <InvoiceItemContainer>
      <InvoiceItemMobile>
        <InvoiceItemDark>{name}</InvoiceItemDark>
        <InvoiceItemLight>
          {quantity} x £ {price}
        </InvoiceItemLight>
      </InvoiceItemMobile>
      <InvoiceItemDark>£ {total}</InvoiceItemDark>
    </InvoiceItemContainer>
  )
}
