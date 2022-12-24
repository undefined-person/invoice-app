import { FC, HTMLInputTypeAttribute } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { Input, InputGroup, Label, Error, ErrorWrapper } from './FormInput.styles'

interface FormInputProps {
  name: string
  label: string
  type: HTMLInputTypeAttribute
  register: UseFormRegister<FieldValues>
  errors: FieldValues
}

export const FormInput: FC<FormInputProps> = ({ name, label, register, errors, type }) => {
  return (
    <InputGroup isError={!!errors[name]}>
      <ErrorWrapper>
        <Label>{label}</Label>
        <Error>{errors[name]?.message}</Error>
      </ErrorWrapper>
      <Input type={type} {...register(name)} />
    </InputGroup>
  )
}
