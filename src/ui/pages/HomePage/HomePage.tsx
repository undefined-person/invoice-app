import { useState } from 'react'

import { dropdownOptions, resolutions } from 'core/constants'
import { useAppDispatch, useWindowResize } from 'core/hooks'
import { ModalType } from 'core/models'
import { invoiceApi } from 'core/services'
import { DashboardLayout } from 'ui/layouts'
import { Button, Container, Filter, Title } from 'ui/common'
import { openModal } from 'core/store/modal/modal.slice'

import { InvoiceList } from './components'

import {
  AddInvoice,
  ContentHeader,
  ContentHeaderRight,
  ContentTitleBlock,
  InvoicesContainer,
  TotalInvoices,
} from './HomePage.styles'

export const HomePage = () => {
  const [filter, setFilter] = useState<string>('')
  const dispatch = useAppDispatch()
  const { width } = useWindowResize()
  const { data } = invoiceApi.useGetInvoicesQuery({ status: filter, limit: 10, offset: 0 })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target

    let newValues = filter

    if (checked) {
      // Add the value to the string if the checkbox is checked
      newValues += `${value},`
    } else {
      // Remove the value from the string if the checkbox is unchecked
      newValues = newValues.replace(`${value},`, '')
    }

    setFilter(newValues)
  }

  const handleAddInvoice = () => {
    dispatch(openModal({ modalType: ModalType.CREATE }))
  }

  const handleTotalInvoicesText = () => {
    if (!data?.count) {
      return 'No invoices'
    }

    if (width > resolutions.mobile) {
      return `There are ${data.count} total invoices`
    }

    return ` ${data.count} invoices`
  }

  return (
    <DashboardLayout>
      <Container>
        <InvoicesContainer>
          <ContentHeader>
            <ContentTitleBlock>
              <Title title="Invoices" size="large" />
              <TotalInvoices>{handleTotalInvoicesText()}</TotalInvoices>
            </ContentTitleBlock>
            <ContentHeaderRight>
              <Filter
                onChange={handleChange}
                placeholder={width > resolutions.mobile ? 'Filter by status' : 'Filter'}
                type="dropdown"
                options={dropdownOptions}
              />
              <Button type="button" color="primary" onClick={handleAddInvoice}>
                <AddInvoice>+</AddInvoice>
                {width > resolutions.mobile ? '  New Invoice' : 'New'}
              </Button>
            </ContentHeaderRight>
          </ContentHeader>
          <InvoiceList invoices={data?.data} />
        </InvoicesContainer>
      </Container>
    </DashboardLayout>
  )
}
