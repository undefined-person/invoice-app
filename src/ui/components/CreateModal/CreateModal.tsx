import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { IInvoiceItem, IInvoiceStatus, InvoiceDto } from 'core/models'
import { invoiceApi } from 'core/services'
import { useCloseModal, useWindowResize } from 'core/hooks'
import { IPaymentTermsData, paymentTermsData, resolutions } from 'core/constants'
import { BackButton, Button, DateSelector, FormInput, InputGroup, Label, Select, Title } from 'ui/common'

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

export const CreateModal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [items, setItems] = useState<IInvoiceItem[]>([{ name: '', price: 0, quantity: 0, total: 0 }])
  const [paymentTerms, setPaymentTerms] = useState(paymentTermsData[0])
  const { width } = useWindowResize()
  const { handleCloseModal } = useCloseModal()

  const [createInvoice] = invoiceApi.useCreateInvoiceMutation()
  const [draftInvoice] = invoiceApi.useDraftInvoiceMutation()

  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
  }

  const handlePaymentTermsChange = (newValue: IPaymentTermsData) => {
    setPaymentTerms(newValue)
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
      draftInvoice(payload as InvoiceDto)
    } else {
      createInvoice(payload as InvoiceDto)
    }
  }

  const handleReset = () => {
    reset()
    setItems([{ name: '', price: 0, quantity: 0, total: 0 }])
    setPaymentTerms(paymentTermsData[0])
  }

  return (
    <CreateModalWrapper>
      <CreateModalContainer>
        <CreateModalForm>
          {width < resolutions.mobile ? <BackButton onClick={handleCloseModal} /> : null}
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
                <Select options={paymentTermsData} onChange={handlePaymentTermsChange} value={paymentTerms} />
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
