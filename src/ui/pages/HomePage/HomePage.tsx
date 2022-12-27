import { useState } from 'react'

import { Button, Container, Filter, Title } from 'ui/common'
import { dropdownOptions } from 'core/constants'
import { DashboardLayout } from 'ui/layouts'
import { invoiceApi } from 'core/services'

import { InvoiceList } from './components'

import { AddInvoice, ContentHeader, ContentTitleBlock, InvoicesContainer, TotalInvoices } from './HomePage.styles'

export const HomePage = () => {
  const [filter, setFilter] = useState<string>('')

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

  return (
    <DashboardLayout>
      <Container>
        <InvoicesContainer>
          <ContentHeader>
            <ContentTitleBlock>
              <Title title="Invoices" />
              <TotalInvoices>{data?.count ? `There are ${data.count} total invoices` : 'No invoices'}</TotalInvoices>
            </ContentTitleBlock>
            <Filter onChange={handleChange} placeholder="Filter by status" type="dropdown" options={dropdownOptions} />
            <Button type="button" color="primary">
              <AddInvoice>+</AddInvoice>
              New Invoice
            </Button>
          </ContentHeader>
          <InvoiceList invoices={data?.data} />
        </InvoicesContainer>
      </Container>
    </DashboardLayout>
  )
}
