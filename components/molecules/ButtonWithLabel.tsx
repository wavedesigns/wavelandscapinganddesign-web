import SectionTitle from 'components/atoms/SectionTitle'
import Link from 'next/link'
import React from 'react'

interface Props {
  label: string
  slug: string
  title: string
  width: string
}

const ButtonWithLabel = ({ label, slug, title, width }: Props) => (
  <div className="m-8">
    <SectionTitle title={title} />
    <Link href={slug}>
      <a
        className="bg-darkBlue hover:bg-darkBlue-light transition duration-500 ease-in-out text-white font-serif px-16 py-4 text-3xl font-bold block mx-auto text-center my-8"
        style={{ width }}
      >
        {label}
      </a>
    </Link>
  </div>
)

export default ButtonWithLabel
