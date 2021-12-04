import React from 'react'
import { Service } from 'types/Service'

interface Props {
  children: React.ReactNode
}
const PageContainer = ({ children }: Props) => {
  return <div className="max-w-screen-xl mx-auto my-16">{children}</div>
}

export default PageContainer
