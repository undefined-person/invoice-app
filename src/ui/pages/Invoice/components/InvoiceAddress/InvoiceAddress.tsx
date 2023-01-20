import { FC } from 'react'

import { IClientAddress } from 'core/models'
import { Paragraph } from 'ui/common'

export const InvoiceAddress: FC<IClientAddress> = ({ city, country, postCode, street }) => {
  return (
    <>
      <Paragraph>{street}</Paragraph>
      <Paragraph>{city}</Paragraph>
      <Paragraph>{postCode}</Paragraph>
      <Paragraph>{country}</Paragraph>
    </>
  )
}
