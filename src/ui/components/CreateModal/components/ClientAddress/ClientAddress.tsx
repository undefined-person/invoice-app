import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { IClientAddress } from 'core/models'
import { FormInput } from 'ui/common'

import { AddressContainer } from './ClientAddress.styles'
import { CreateModalGroup } from '../../CreateModal.styles'

interface ClientAddressProps {
  register: UseFormRegister<FieldValues>
  errors: FieldValues
  type: 'client' | 'sender'
  defaultValues?: IClientAddress
}

export const ClientAddress: FC<ClientAddressProps> = ({ errors, register, type, defaultValues }) => {
  return (
    <CreateModalGroup>
      <FormInput
        defaultValue={defaultValues?.street}
        type="text"
        name={`${type}StreetAddress`}
        label="Street Address"
        register={register}
        errors={errors}
      />
      <AddressContainer>
        <FormInput
          defaultValue={defaultValues?.city}
          type="text"
          name={`${type}City`}
          label="City"
          register={register}
          errors={errors}
        />
        <FormInput
          defaultValue={defaultValues?.postCode}
          type="text"
          name={`${type}PostCode`}
          label="Post Code"
          register={register}
          errors={errors}
        />
        <FormInput
          defaultValue={defaultValues?.country}
          type="text"
          name={`${type}Country`}
          label="Country"
          register={register}
          errors={errors}
        />
      </AddressContainer>
    </CreateModalGroup>
  )
}
