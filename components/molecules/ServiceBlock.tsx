import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  label: string
  description: string
  slug: string
  img: {
    src: string
    width: number
    height: number
    alt: string
  }
}

const ServiceBlock = ({ label, description, img, slug }: Props) => {
  return (
    <>
      <div className="bg-white relative p-8 flex flex-col justify-center items-center text-center rounded border-gray-300 mx-4">
        <Link href={slug}>
          <a>
            <Image {...img} layout="fixed" className="p-4" />
            <p className="text-xl font-serif py-2 px-6 border-b-2">{label}</p>
            <p className="text-lg font-serif mt-4">{description}</p>
          </a>
        </Link>
      </div>
    </>
  )
}

export default ServiceBlock
