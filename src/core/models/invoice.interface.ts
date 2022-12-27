export interface IInvoiceList {
  data: IInvoiceListItem[]
  count: number
}

export interface IInvoiceListItem {
  id: number
  orderId: string
  paymentDue: string
  clientName: string
  status: IInvoiceStatus
  total: string
}

export type IInvoiceStatus = 'paid' | 'pending' | 'draft'

export interface IInvoicesQuery {
  status: string
  limit: number
  offset: number
}
