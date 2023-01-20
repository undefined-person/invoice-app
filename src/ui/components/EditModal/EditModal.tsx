import { FC, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { useAppDispatch, useCloseModal, useWindowResize } from 'core/hooks'
import { IInvoiceItem, IInvoiceStatus, InvoiceInfo } from 'core/models'
import { Title, FormInput, DateSelector, InputGroup, Label, Filter, Button, FilterOption, BackButton } from 'ui/common'

import { ClientAddress, ItemList } from '../CreateModal/components'

import {
  CreateModalContainer,
  CreateModalForm,
  CreateModalGroup,
  CreateModalTitle,
  CreateModalWrapper,
  DateContainer,
  EditModalButtons,
} from '../CreateModal/CreateModal.styles'
import { invoiceApi } from 'core/services'
import { resolutions } from 'core/constants'

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

interface IEditModalProps {
  invoice: InvoiceInfo
}

export const EditModal: FC<IEditModalProps> = ({ invoice }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(invoice.createdAt))
  const [items, setItems] = useState<IInvoiceItem[]>(invoice.items)
  const [paymentTerms, setPaymentTerms] = useState(options.find((option) => option.value === invoice.paymentTerms)!)
  const { width } = useWindowResize()
  const { handleCloseModal } = useCloseModal()
  const dispatch = useAppDispatch()

  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
  }

  const handlePaymentTermsChange = (value: FilterOption) => {
    setPaymentTerms(value)
  }

  const [updateInvoice] = invoiceApi.useUpdateInvoiceMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitForm = (data: FieldValues) => {
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
      ...invoice,
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
      total: itemsData.reduce((acc, item) => acc + item.total, 0),
    }

    updateInvoice(payload)
  }

  return (
    <CreateModalWrapper>
      <CreateModalContainer>
        <CreateModalForm>
          {width < resolutions.mobile ? <BackButton onClick={handleCloseModal} /> : null}
          <Title title={`Edit #${invoice.orderId}`} size="medium" />
          <CreateModalTitle>Bill From</CreateModalTitle>
          <ClientAddress defaultValues={invoice.senderAddress} errors={errors} register={register} type="sender" />
          <CreateModalTitle>Bill To</CreateModalTitle>
          <CreateModalGroup>
            <FormInput
              defaultValue={invoice.clientName}
              type="text"
              name="clientName"
              label="Client's Name"
              register={register}
              errors={errors}
            />
            <FormInput
              defaultValue={invoice.clientEmail}
              type="email"
              name="clientEmail"
              label="Client's Email"
              register={register}
              errors={errors}
            />
          </CreateModalGroup>
          <ClientAddress defaultValues={invoice.clientAddress} errors={errors} register={register} type="client" />
          <CreateModalGroup>
            <DateContainer>
              <DateSelector defaultValue={selectedDate} label="Invoice Date" onDateChange={handleDateChange} />
              <InputGroup>
                <Label>Payment Terms</Label>
                <Filter type="select" options={options} onChange={handlePaymentTermsChange} value={paymentTerms} />
              </InputGroup>
            </DateContainer>
            <FormInput
              defaultValue={invoice.description}
              type="text"
              name="description"
              label="Project Description"
              register={register}
              errors={errors}
            />
          </CreateModalGroup>
          <ItemList items={items} setItems={setItems} register={register} errors={errors} />
        </CreateModalForm>
        <EditModalButtons>
          <Button onClick={handleCloseModal} color="sky">
            Cancel
          </Button>
          <Button onClick={handleSubmit((data) => submitForm(data))} color="primary">
            Save Changes
          </Button>
        </EditModalButtons>
      </CreateModalContainer>
    </CreateModalWrapper>
  )
}
