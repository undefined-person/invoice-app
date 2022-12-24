import { FC } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { useBoolean } from 'core/hooks'
import { ErrorWrapper, Input, InputGroup, Label, Error } from 'ui/common'
import { theme } from 'core/theme'

import { PasswordInputWrapper } from './PasswordInput.styles'

interface PasswordInputProps {
  register: UseFormRegister<FieldValues>
  errors: FieldValues
}

export const PasswordInput: FC<PasswordInputProps> = ({ register, errors }) => {
  const { value: isShowPassword, toggle } = useBoolean(false)

  return (
    <InputGroup isError={!!errors.password}>
      <ErrorWrapper>
        <Label>Password</Label>
        <Error>{errors.password?.message}</Error>
      </ErrorWrapper>
      <PasswordInputWrapper>
        <Input type={isShowPassword ? 'text' : 'password'} {...register('password')} />
        <FontAwesomeIcon color={theme.light.primary} onClick={toggle} icon={isShowPassword ? faEyeSlash : faEye} />
      </PasswordInputWrapper>
    </InputGroup>
  )
}
