import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalType } from 'core/models'

interface ModalPayload {
  modalType: ModalType
  modalProps?: any
}

interface ModalState {
  modalType: ModalType
  isOpen: boolean
  modalProps: any
}

const initialState: ModalState = {
  modalType: {} as ModalType,
  isOpen: false,
  modalProps: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalPayload>) => {
      state.modalType = action.payload.modalType
      state.modalProps = action.payload.modalProps
      state.isOpen = true
    },
    closeModal: (state) => {
      state.modalType = {} as ModalType
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
