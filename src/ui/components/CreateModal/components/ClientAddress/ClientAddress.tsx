import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { FormInput } from 'ui/common'
import { AddressContainer } from './ClientAddress.styles'
import { CreateModalGroup } from '../../CreateModal.styles'

interface ClientAddressProps {
  register: UseFormRegister<FieldValues>
  errors: FieldValues
  type: 'client' | 'sender'
}

export const ClientAddress: FC<ClientAddressProps> = ({ errors, register, type }) => {
  return (
    <CreateModalGroup>
      <FormInput type="text" name={`${type}StreetAddress`} label="Street Address" register={register} errors={errors} />
      <AddressContainer>
        <FormInput type="text" name={`${type}City`} label="City" register={register} errors={errors} />
        <FormInput type="text" name={`${type}PostCode`} label="Post Code" register={register} errors={errors} />
        <FormInput type="text" name={`${type}Country`} label="Country" register={register} errors={errors} />
      </AddressContainer>
    </CreateModalGroup>
  )
}
