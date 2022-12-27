import { IInvoiceList, IInvoicesQuery } from './../models/invoice.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ACCESS_TOKEN } from 'core/constants'

export const invoiceApi = createApi({
  reducerPath: 'invoiceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getInvoices: builder.query<IInvoiceList, IInvoicesQuery>({
      query: ({ status, limit, offset }) => ({ url: '/invoice', params: { status, limit, offset } }),
    }),
    getInvoice: builder.query({
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
