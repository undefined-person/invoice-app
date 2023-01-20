import { useMemo } from 'react'
import ReactDom from 'react-dom'

import { useAppSelector, useCloseModal } from 'core/hooks'
import { ModalType } from 'core/models'
import { CreateModal, DeleteModal, EditModal } from 'ui/components'

import { Overlay } from './Modal.styles'

export const Modal = () => {
  const { isOpen, modalType, modalProps } = useAppSelector((state) => state.modal)
  const { handleCloseModal } = useCloseModal()
  const modalPlaceholderElement = document.getElementById('modal')!

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
