import { api } from 'core/utils'
import { IInvoiceList, IInvoicesQuery, InvoiceInfo } from 'core/models'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = (config: any) => {
  return api(config)
}

export const invoiceApi = createApi({
  reducerPath: 'invoiceApi',
  baseQuery,
  endpoints: (builder) => ({
    getInvoices: builder.query<IInvoiceList, IInvoicesQuery>({
      query: ({ status, limit, offset }) => ({ url: '/invoice', params: { status, limit, offset } }),
    }),
    getInvoice: builder.query<InvoiceInfo, string>({
      query: (id: string) => `/invoice/${id}`,
    }),
    createInvoice: builder.mutation({
      query: (body: any) => ({
        url: '/invoice',
        method: 'POST',
        body,
      }),
    }),
    updateInvoice: builder.mutation({
      query: (body: any) => ({
        url: `/invoice/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteInvoice: builder.mutation({
      query: (id: string) => ({
        url: `/invoice/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})
