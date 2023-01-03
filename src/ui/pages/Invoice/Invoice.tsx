import { useParams, useNavigate } from 'react-router-dom'

import { Button, Container, InvoiceStatus, Paragraph } from 'ui/common'
import { DashboardLayout } from 'ui/layouts'
import { invoiceApi } from 'core/services'

import Arrow from 'assets/images/icons/icon-arrow.svg'

import { InvoiceGroup, InvoiceItems, InvoiceAddress } from './components'

import {
  BackArrow,
  BackContainer,
  InvoiceClientAddress,
  InvoiceClientEmail,
  InvoiceContainer,
  InvoiceControl,
  InvoiceDate,
  InvoiceInfo,
  InvoiceInfoCenter,
  InvoiceInfoTop,
  InvoiceInfoTopLeft,
  InvoiceInfoTopRight,
  OrderId,
  Status,
  TopContainer,
} from './Invoice.styles'

export const Invoice = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()

  const { data } = invoiceApi.useGetInvoiceQuery(orderId)

  return (
    <DashboardLayout>
      <Container>
        {data && (
          <InvoiceContainer>
            <BackContainer onClick={() => navigate(-1)}>
              <BackArrow src={Arrow} alt="Arrow" /> Go back
            </BackContainer>
            <TopContainer>
              <Status>
                <span>Status</span>
                <InvoiceStatus status={data.status}>{data.status}</InvoiceStatus>
              </Status>
              <InvoiceControl>
                <Button color="sky" disabled={data.status === 'paid'}>
                  Edit
                </Button>
                <Button color="coral">Delete</Button>
                <Button color="primary" disabled={data.status === 'paid'}>
                  Mark as Paid
                </Button>
              </InvoiceControl>
            </TopContainer>
            <InvoiceInfo>
              <InvoiceInfoTop>
                <InvoiceInfoTopLeft>
                  <OrderId>
                    <span>#</span>
                    {data.orderId}
                  </OrderId>
                  <Paragraph>{data.description}</Paragraph>
                </InvoiceInfoTopLeft>
                <InvoiceInfoTopRight>
                  <InvoiceAddress {...data.senderAddress} />
                </InvoiceInfoTopRight>
              </InvoiceInfoTop>
              <InvoiceInfoCenter>
                <InvoiceDate>
                  <InvoiceGroup title="Invoice Date" subtitle="21 Aug 2021" />
                  <InvoiceGroup title="Payment Due" subtitle="21 Aug 2021" />
                </InvoiceDate>
                <div>
                  <InvoiceGroup title="Bill To" subtitle={data.clientName} />
                  <InvoiceClientAddress>
                    <InvoiceAddress {...data.clientAddress} />
                  </InvoiceClientAddress>
                </div>
                <InvoiceClientEmail>
                  <InvoiceGroup title="Sent to" subtitle={data.clientEmail} />
                </InvoiceClientEmail>
              </InvoiceInfoCenter>
              {data.items ? <InvoiceItems invoiceItems={data.items} total={data.total} /> : null}
            </InvoiceInfo>
          </InvoiceContainer>
        )}
      </Container>
    </DashboardLayout>
  )
}
