import SectionTitle from 'components/atoms/SectionTitle'
import ServiceBlock from 'components/molecules/ServiceBlock'
import React from 'react'

const SERVICES = [
  {
    id: 1,
    label: 'Lawn Maintenance',
    description: 'Achieve a greener lawn with lawn care services from our team.',
    slug: '/services/#lawn-maintenance',
    img: {
      src: '/images/service-icons/lawn-maintenance.webp',
      width: 200,
      height: 192,
      alt: 'lawn maintenance',
    },
  },
  {
    id: 2,
    label: 'Landscape Design',
    description: 'Endless ideas for customizing your personal resort or your backyard.',
    slug: '/services/#landscape-design',
    img: {
      src: '/images/service-icons/landscape-design.webp',
      width: 220,
      height: 206,
      alt: 'landscape design',
    },
  },
  {
    id: 3,
    label: 'Irrigation Services',
    description: 'Offering sprinkler checks and system repairs.',
    slug: '/services/#lawn-maintenance',
    img: {
      src: '/images/service-icons/irrigation.webp',
      width: 220,
      height: 191,
      alt: 'irrigation',
    },
  },
]

const Services = () => (
  <div className="p-16">
    <SectionTitle title="Services" />
    <div className="flex flex-col sm:flex-row my-16 space-between mx-auto max-w-7xl">
      {SERVICES.map((service) => (
        <ServiceBlock {...service} key={service.id} />
      ))}
    </div>
  </div>
)

export default Services
