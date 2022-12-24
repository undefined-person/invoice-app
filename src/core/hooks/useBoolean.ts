import { Dispatch, SetStateAction, useState } from 'react'

interface ReturnType {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

export const useBoolean = (defaultValue?: boolean): ReturnType => {
  const [value, setValue] = useState<boolean>(!!defaultValue)

  const setTrue = () => setValue(true)
  const setFalse = () => setValue(false)
  const toggle = () => setValue(!value)

  return { value, setValue, setTrue, setFalse, toggle }
}
