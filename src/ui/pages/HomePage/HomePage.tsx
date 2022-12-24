import { Button, Container, Filter, Title } from 'ui/common'
import { dropdownOptions } from 'core/constants'
import { DashboardLayout } from 'ui/layouts'

import {
  ContentHeader,
  ContentTitleBlock,
  TotalInvoices,
} from './HomePage.styles'

export const HomePage = () => {
  return (
    <DashboardLayout>
      <Container>
        <ContentHeader>
          <ContentTitleBlock>
            <Title title="Invoices" />
            <TotalInvoices>There are 7 total invoices</TotalInvoices>
          </ContentTitleBlock>
          <Filter
            placeholder="Filter by status"
            type="dropdown"
            options={dropdownOptions}
          />
          <Button type="button" color="primary">
            asd
          </Button>
        </ContentHeader>
      </Container>
    </DashboardLayout>
  )
}
