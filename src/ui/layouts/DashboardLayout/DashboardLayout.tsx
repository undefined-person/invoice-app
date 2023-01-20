import { FC, ReactNode } from 'react'

import { Header } from 'ui/components'

import { DashboardLayoutContainer } from './DashboardLayout.styles'
interface DashboardLayoutProps {
  children: ReactNode
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <DashboardLayoutContainer>
      <Header />
      {children}
    </DashboardLayoutContainer>
  )
}
