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

export interface IClientAddress {
  city: string
  street: string
  country: string
  postCode: string
}

export interface IInvoiceItem {
  name: string
  price: number
  total: number
  quantity: number
}

export interface InvoiceInfo {
  id: number
  orderId: string
  createdAt: string
  paymentDue: Date
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: IInvoiceStatus
  senderAddress: IClientAddress
  clientAddress: IClientAddress
  items: IInvoiceItem[]
  total: number
}

type InvoiceInfoUnwantedKeys = 'orderId' | 'paymentDue'

export type InvoiceDto = Omit<InvoiceInfo, InvoiceInfoUnwantedKeys>
