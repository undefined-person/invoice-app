import { FC, HTMLInputTypeAttribute } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { Input, InputGroup, Label, Error, ErrorWrapper } from './FormInput.styles'

interface FormInputProps {
  name: string
  label: string
  type: HTMLInputTypeAttribute
  register: UseFormRegister<FieldValues>
  errors: FieldValues
  defaultValue?: string
}

export const FormInput: FC<FormInputProps> = ({ name, label, register, errors, type, defaultValue }) => {
  return (
    <InputGroup isError={!!errors[name]}>
      <ErrorWrapper>
        <Label>{label}</Label>
        <Error>{errors[name]?.message}</Error>
      </ErrorWrapper>
      <Input defaultValue={defaultValue} type={type} {...register(name)} />
    </InputGroup>
  )
}
