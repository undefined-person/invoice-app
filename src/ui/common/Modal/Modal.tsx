import { useMemo } from 'react'
import ReactDom from 'react-dom'

import { useAppDispatch, useAppSelector } from 'core/hooks'
import { ModalType } from 'core/models'
import { CreateModal, DeleteModal } from 'ui/components'

import { Overlay } from './Modal.styles'
import { closeModal } from 'core/store/modal/modal.slice'
import { EditModal } from 'ui/components/EditModal/EditModal'

export const Modal = () => {
  const { isOpen, modalType, modalProps } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()
  const modalPlaceholderElement = document.getElementById('modal')!

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const modals = useMemo(() => {
    return {
      [ModalType.DELETE]: <DeleteModal />,
      [ModalType.CREATE]: <CreateModal />,
      [ModalType.EDIT]: <EditModal invoice={modalProps} />,
    }
  }, [modalProps])

  return (
    <>
      {isOpen
        ? ReactDom.createPortal(
            <>
              {modals[modalType]}
              <Overlay onClick={handleCloseModal} />
            </>,
            modalPlaceholderElement
          )
        : null}
    </>
  )
}
