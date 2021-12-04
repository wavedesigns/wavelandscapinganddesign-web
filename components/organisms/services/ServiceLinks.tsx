import Link from 'next/link'
import React from 'react'
import { Link as SiteLink } from 'types/Link'

interface Props {
  links: SiteLink[]
}
const ServiceLinks = ({ links }: Props) => (
  <div className="w-full bg-darkBlue flex flex-row justify-center text-white">
    <div className="max-w-6xl mx-auto pt-4 pb-6 text-center">
      {links.map(({ label, slug }) => (
        <Link href={slug} key={label}>
          <a className="text-3xl mx-4 font-serif hover:underline">{label}</a>
        </Link>
      ))}
    </div>
  </div>
)

export default ServiceLinks
