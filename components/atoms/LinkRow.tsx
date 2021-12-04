import Link from 'next/link'
import React from 'react'
import { Link as SiteLink } from 'types/Link'
interface Props {
  title: string
  links: SiteLink[]
}

const LinkRow = ({ title, links }: Props) => {
  return (
    <div className="flex flex-col sm:w-52">
      <p className="text-darkBlue font-serif font-bold text-2xl">{title}</p>
      {links.map(({ slug, label }) => (
        <Link href={slug} key={label}>
          <a className="text-xl mb-2 font-serif">{label}</a>
        </Link>
      ))}
    </div>
  )
}

export default LinkRow
