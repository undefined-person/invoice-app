import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ACCESS_TOKEN } from 'core/constants'
import { IInvoiceList, IInvoicesQuery, InvoiceDto, InvoiceInfo } from 'core/models'

export const invoiceApi = createApi({
  reducerPath: 'invoiceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Invoice'],
  endpoints: (builder) => ({
    getInvoices: builder.query<IInvoiceList, IInvoicesQuery>({
      query: ({ status, limit, offset }) => ({ url: '/invoice', params: { status, limit, offset } }),
      providesTags: ['Invoice'],
    }),
    getInvoice: builder.query<InvoiceInfo, string>({
      query: (id: string) => `/invoice/${id}`,
      providesTags: ['Invoice'],
    }),
    createInvoice: builder.mutation({
      query: (body: InvoiceDto) => ({
        url: '/invoice',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Invoice'],
    }),
    draftInvoice: builder.mutation({
      query: (body: InvoiceDto) => ({
        url: '/invoice/draft',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Invoice'],
    }),
    updateInvoice: builder.mutation({
      query: (body: InvoiceInfo) => ({
        url: `/invoice`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Invoice'],
    }),
    deleteInvoice: builder.mutation({
      query: (id: number) => ({
        url: `/invoice/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invoice'],
    }),
    markInvoiceAsPaid: builder.mutation({
      query: (id: number) => ({
        url: `invoice/paid/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Invoice'],
    }),
  }),
})
