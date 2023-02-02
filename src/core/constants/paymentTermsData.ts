export interface IPaymentTermsData {
  label: string
  value: number
}

export const paymentTermsData: IPaymentTermsData[] = [
  {
    label: 'Net 1 Day',
    value: 1,
  },
  {
    label: 'Net 7 Day',
    value: 7,
  },
  {
    label: 'Net 14 Day',
    value: 14,
  },
  {
    label: 'Net 30 Day',
    value: 30,
  },
]
