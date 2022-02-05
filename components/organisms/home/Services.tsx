import SectionTitle from 'components/atoms/SectionTitle'
import dynamic from 'next/dynamic'
import React from 'react'
import { SERVICES } from 'utils/constants'

const ServiceBlock = dynamic(() => import('components/molecules/ServiceBlock'), { ssr: false })

const Services = () => (
  <div className="p-4 sm:p-16">
    <SectionTitle title="Services" />
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mx-auto mt-12">
      {SERVICES.map((service) => (
        <ServiceBlock {...service} key={service.id} />
      ))}
    </div>
  </div>
)

export default Services
