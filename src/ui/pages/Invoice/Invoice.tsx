import { useParams, useNavigate } from 'react-router-dom'

import { invoiceApi } from 'core/services'
import { useAppDispatch } from 'core/hooks'
import { ModalType } from 'core/models'
import { Button, Container, InvoiceStatus, Paragraph } from 'ui/common'
import { DashboardLayout } from 'ui/layouts'
import { openModal } from 'core/store/modal/modal.slice'

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
import { dateFormatter } from 'core/utils'

export const Invoice = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { data } = invoiceApi.useGetInvoiceQuery(orderId!)
  const [markAsPaid] = invoiceApi.useMarkInvoiceAsPaidMutation()

  const handleDelete = () => {
    dispatch(openModal({ modalType: ModalType.DELETE, modalProps: { id: data?.id, orderId } }))
  }

  const handleMarkAsPaid = () => {
    markAsPaid(data.id)
  }

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
                <Button color="coral" onClick={handleDelete}>
                  Delete
                </Button>
                <Button color="primary" onClick={handleMarkAsPaid} disabled={data.status === 'paid'}>
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
                  <InvoiceGroup title="Invoice Date" subtitle={dateFormatter(data.createdAt)} />
                  <InvoiceGroup title="Payment Due" subtitle={dateFormatter(data.paymentDue)} />
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
