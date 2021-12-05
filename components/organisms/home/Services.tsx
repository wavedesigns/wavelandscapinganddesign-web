import SectionTitle from 'components/atoms/SectionTitle'
import ServiceBlock from 'components/molecules/ServiceBlock'
import React from 'react'
import { SERVICES } from 'utils/constants'

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
