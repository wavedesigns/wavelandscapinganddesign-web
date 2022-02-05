import Link from 'next/link'
import React from 'react'
import { SITE_NAV } from 'utils/constants'

const Navigation = () => (
  <nav className="flex justify-between">
    {SITE_NAV.map(({ id, label, slug }) => (
      <Link key={id} href={slug}>
        <a className="hover:underline mx-4 font-serif text-2xl h-8">{label}</a>
      </Link>
    ))}
  </nav>
)

export default Navigation
