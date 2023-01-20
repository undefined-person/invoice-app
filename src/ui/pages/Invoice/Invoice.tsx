import { useNavigate, useParams } from 'react-router-dom'

import { invoiceApi } from 'core/services'
import { useAppDispatch, useWindowResize } from 'core/hooks'
import { ModalType } from 'core/models'
import { dateFormatter } from 'core/utils'
import { resolutions } from 'core/constants'
import { BackButton, Button, Container, InvoiceStatus, Paragraph } from 'ui/common'
import { DashboardLayout } from 'ui/layouts'
import { openModal } from 'core/store/modal/modal.slice'

import { InvoiceGroup, InvoiceItems, InvoiceAddress } from './components'

import {
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
  const dispatch = useAppDispatch()
  const { width } = useWindowResize()
  const navigate = useNavigate()
  const { data } = invoiceApi.useGetInvoiceQuery(orderId!)
  const [markAsPaid] = invoiceApi.useMarkInvoiceAsPaidMutation()

  const handleDelete = () => {
    dispatch(openModal({ modalType: ModalType.DELETE, modalProps: { id: data?.id, orderId } }))
  }

  const handleMarkAsPaid = () => {
    markAsPaid(data.id)
  }

  const handleEdit = () => {
    dispatch(openModal({ modalType: ModalType.EDIT, modalProps: data }))
  }

  return (
    <DashboardLayout>
      <Container>
        {data && (
          <InvoiceContainer>
            <BackButton onClick={() => navigate(-1)} />
            <TopContainer>
              <Status>
                <span>Status</span>
                <InvoiceStatus status={data.status}>{data.status}</InvoiceStatus>
              </Status>
              {width > resolutions.mobile ? (
                <InvoiceControl>
                  <Button color="sky" disabled={data.status === 'paid'} onClick={handleEdit}>
                    Edit
                  </Button>
                  <Button color="coral" onClick={handleDelete}>
                    Delete
                  </Button>
                  <Button color="primary" onClick={handleMarkAsPaid} disabled={data.status === 'paid'}>
                    Mark as Paid
                  </Button>
                </InvoiceControl>
              ) : null}
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
      {width <= resolutions.mobile ? (
        <InvoiceControl>
          <Button color="sky" disabled={data?.status === 'paid'} onClick={handleEdit}>
            Edit
          </Button>
          <Button color="coral" onClick={handleDelete}>
            Delete
          </Button>
          <Button color="primary" onClick={handleMarkAsPaid} disabled={data?.status === 'paid'}>
            Mark as Paid
          </Button>
        </InvoiceControl>
      ) : null}
    </DashboardLayout>
  )
}
