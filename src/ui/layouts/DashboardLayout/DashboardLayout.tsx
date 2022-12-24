import { FC, ReactNode } from 'react'

import { Header } from 'ui/components'

interface DashboardLayoutProps {
  children: ReactNode
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
