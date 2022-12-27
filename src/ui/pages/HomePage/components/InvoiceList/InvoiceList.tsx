import { FC } from 'react'

import { IInvoiceListItem } from 'core/models'

import { InvoiceItem } from './InvoiceItem'

import IllustrationEmpty from 'assets/images/illustration-empty.svg'

import { EmptyContainer, EmptySubtitle, EmptyTitle, InvoicesList } from './InvoiceList.styles'

interface InvoiceListProps {
  invoices: IInvoiceListItem[]
}

export const InvoiceList: FC<InvoiceListProps> = ({ invoices }) => {
  if (invoices?.length > 0) {
    return (
      <InvoicesList>
        {invoices?.map((invoice) => (
          <InvoiceItem key={invoice.id} {...invoice} />
        ))}
      </InvoicesList>
    )
  }

  return (
    <EmptyContainer>
      <img src={IllustrationEmpty} alt="" />
      <EmptyTitle>There is nothing here</EmptyTitle>
      <EmptySubtitle>
        Create an invoice by clicking the <span>New Invoice</span> button and get started
      </EmptySubtitle>
    </EmptyContainer>
  )
}
