import { closeModal } from 'core/store/modal/modal.slice'
import { useAppDispatch } from './useAppDispatch'

export const useCloseModal = () => {
  const dispatch = useAppDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return { handleCloseModal }
}
