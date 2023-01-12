import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'core/constants'
import { useAppDispatch, useAppSelector } from 'core/hooks'
import { invoiceApi } from 'core/services'
import { closeModal } from 'core/store/modal/modal.slice'
import { Button, Title } from 'ui/common'

import { DeleteControls, DeleteModalWrapper, DeleteParagraph } from './DeleteModal.styles'

export const DeleteModal = () => {
  const { modalProps } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [deleteInvoice] = invoiceApi.useDeleteInvoiceMutation()

  const handleCancel = () => {
    dispatch(closeModal())
  }

  const handleDelete = () => {
    deleteInvoice(modalProps.id)
    dispatch(closeModal())
    navigate(ROUTES.home)
  }

  return (
    <DeleteModalWrapper>
      <Title title="Confirm Deletion" size="medium" />
      <DeleteParagraph>
        Are you sure you want to delete invoice #{modalProps.orderId}? This action cannot be undone.
      </DeleteParagraph>
      <DeleteControls>
        <Button color="sky" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="coral" onClick={handleDelete}>
          Delete
        </Button>
      </DeleteControls>
    </DeleteModalWrapper>
  )
}
