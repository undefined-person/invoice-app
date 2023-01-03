import { FC } from 'react'
import { Paragraph } from 'ui/common'

import { InvoiceGroupContainer, InvoiceTitle } from './InvoiceGroup.styles'

interface InvoiceGroupProps {
  title: string
  subtitle: string
}

export const InvoiceGroup: FC<InvoiceGroupProps> = ({ title, subtitle }) => {
  return (
    <InvoiceGroupContainer>
      <Paragraph>{title}</Paragraph>
      <InvoiceTitle>{subtitle}</InvoiceTitle>
    </InvoiceGroupContainer>
  )
}
