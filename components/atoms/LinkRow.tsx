import Link from 'next/link'
import React from 'react'
import { Link as SiteLink } from 'types/Link'
interface Props {
  title: string
  links: SiteLink[]
}

const LinkRow = ({ title, links }: Props) => {
  return (
    <div className="mb-6 sm:mb-0 sm:w-52 md:mr-12">
      <p className="text-darkBlue font-serif font-bold text-xl">{title}</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
        {links.map(({ slug, label }) => (
          <li key={label}>
            <Link href={slug}>
              <a className="text-base mb-2 font-serif">{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkRow
