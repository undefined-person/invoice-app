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

export interface ClientAddress {
  city: string
  street: string
  country: string
  postCode: string
}

export interface IInvoiceItem {
  id: string
  name: string
  price: number
  total: number
  quantity: number
}

export interface InvoiceInfo {
  id: number
  orderId: string
  createdAt: Date
  paymentDue: Date
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: IInvoiceStatus
  senderAddress: ClientAddress
  clientAddress: ClientAddress
  items: IInvoiceItem[]
  total: string
}

type InvoiceInfoUnwantedKeys = 'id' | 'orderId' | 'paymentDue'

export type InvoiceDto = Omit<InvoiceInfo, InvoiceInfoUnwantedKeys>
