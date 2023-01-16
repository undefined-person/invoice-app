import { FC } from 'react'

import { ClientAddress } from 'core/models'
import { Paragraph } from 'ui/common'

export const InvoiceAddress: FC<ClientAddress> = ({ city, country, postCode, street }) => {
  return (
    <>
      <Paragraph>{street}</Paragraph>
      <Paragraph>{city}</Paragraph>
      <Paragraph>{postCode}</Paragraph>
      <Paragraph>{country}</Paragraph>
    </>
  )
}
