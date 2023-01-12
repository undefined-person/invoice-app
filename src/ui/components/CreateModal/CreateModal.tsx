import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { IInvoiceItem, IInvoiceStatus } from 'core/models'
import { generateId } from 'core/utils'
import { invoiceApi } from 'core/services'
import { Button, DateSelector, Filter, FilterOption, FormInput, InputGroup, Label, Title } from 'ui/common'

import { ClientAddress, ItemList } from './components'

import {
  CreateModalButtons,
  CreateModalButtonsRight,
  CreateModalContainer,
  CreateModalForm,
  CreateModalGroup,
  CreateModalTitle,
  CreateModalWrapper,
  DateContainer,
} from './CreateModal.styles'

const options: FilterOption[] = [
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

export const CreateModal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [items, setItems] = useState<IInvoiceItem[]>([{ id: generateId(), name: '', price: 0, quantity: 0, total: 0 }])
  const [paymentTerms, setPaymentTerms] = useState(options[0])

  const [createInvoice] = invoiceApi.useCreateInvoiceMutation()
  const [draftInvoice] = invoiceApi.useDraftInvoiceMutation()

  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
  }

  const handlePaymentTermsChange = (value: FilterOption) => {
    setPaymentTerms(value)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const submitForm = (data: FieldValues, invoiceStatus: IInvoiceStatus) => {
    const {
      senderStreetAddress,
      senderCity,
      senderPostCode,
      senderCountry,
      clientName,
      clientEmail,
      clientStreetAddress,
      clientCity,
      clientPostCode,
      clientCountry,
      description,
    } = data
    const itemsData = Object.entries(items).map(([_, item]) => {
      const { name, price, quantity, total } = item
      return { name, price: Number(price), quantity: Number(quantity), total }
    })
    const payload = {
      senderAddress: {
        street: senderStreetAddress,
        city: senderCity,
        postCode: senderPostCode,
        country: senderCountry,
      },
      clientAddress: {
        street: clientStreetAddress,
        city: clientCity,
        postCode: clientPostCode,
        country: clientCountry,
      },
      clientName,
      createdAt: selectedDate.toISOString(),
      clientEmail,
      description,
      paymentTerms: paymentTerms.value,
      items: itemsData,
      status: invoiceStatus,
      total: itemsData.reduce((acc, item) => acc + item.total, 0),
    }

    if (invoiceStatus === 'draft') {
      draftInvoice(payload)
      return
    } else {
      createInvoice(payload)
    }
  }

  const handleReset = () => {
    reset()
    setItems([{ id: generateId(), name: '', price: 0, quantity: 0, total: 0 }])
    setPaymentTerms(options[0])
  }

  return (
    <CreateModalWrapper>
      <CreateModalContainer>
        <CreateModalForm>
          <Title title="New Invoice" size="medium" />
          <CreateModalTitle>Bill From</CreateModalTitle>
          <ClientAddress errors={errors} register={register} type="sender" />
          <CreateModalTitle>Bill To</CreateModalTitle>
          <CreateModalGroup>
            <FormInput type="text" name="clientName" label="Client's Name" register={register} errors={errors} />
            <FormInput type="email" name="clientEmail" label="Client's Email" register={register} errors={errors} />
          </CreateModalGroup>
          <ClientAddress errors={errors} register={register} type="client" />
          <CreateModalGroup>
            <DateContainer>
              <DateSelector label="Invoice Date" onDateChange={handleDateChange} />
              <InputGroup>
                <Label>Payment Terms</Label>
                <Filter type="select" options={options} onChange={handlePaymentTermsChange} value={paymentTerms} />
              </InputGroup>
            </DateContainer>
            <FormInput type="text" name="description" label="Project Description" register={register} errors={errors} />
          </CreateModalGroup>
          <ItemList items={items} setItems={setItems} register={register} errors={errors} />
        </CreateModalForm>
        <CreateModalButtons>
          <Button onClick={handleReset} color="sky">
            Discard
          </Button>
          <CreateModalButtonsRight>
            <Button onClick={handleSubmit((data) => submitForm(data, 'draft'))} color="header">
              Save as Draft
            </Button>
            <Button onClick={handleSubmit((data) => submitForm(data, 'pending'))} color="primary">
              Save & Send
            </Button>
          </CreateModalButtonsRight>
        </CreateModalButtons>
      </CreateModalContainer>
    </CreateModalWrapper>
  )
}
