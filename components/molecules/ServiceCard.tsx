import Image from 'next/image'
import React from 'react'
import { Service } from 'types/Service'

interface Props {
  service: Service
  index: number
}
const ServiceCard = ({ service, index }: Props) => (
  <div
    id={service.id}
    className={`flex flex-col lg:flex-row lg:justify-between my-12 mx-2 lg:mx-0 sm:my-24 ${
      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
    }`}
  >
    <div className="mx-auto lg:mx-0 mb-4 lg:mb-0">
      <Image
        src={service.displayImage.url}
        alt={service.title}
        width={600}
        height={400}
        layout="intrinsic"
      />
    </div>
    <div className="m-auto max-w-lg text-center">
      <p className="text-skyBlue font-serif text-3xl font-bold">{service.title}</p>
      <p className="font-serif text-2xl">{service.description}</p>
    </div>
  </div>
)

export default ServiceCard
