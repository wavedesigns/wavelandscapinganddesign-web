import Link from 'next/link'
import React from 'react'

const SITE_NAV = [
  {
    id: 1,
    label: 'Services',
    slug: '/services',
  },
  {
    id: 2,
    label: 'Gallery',
    slug: '/gallery',
  },
  {
    id: 3,
    label: 'Reviews',
    slug: '/reviews',
  },
  {
    id: 4,
    label: 'Careers',
    slug: '/careers',
  },
  {
    id: 5,
    label: 'Contact',
    slug: '/contact',
  },
]

const Navigation = () => (
  <nav className="flex justify-between">
    {SITE_NAV.map(({ id, label, slug }) => (
      <Link key={id} href={slug}>
        <a className="hover:underline mx-4 font-serif text-2xl">{label}</a>
      </Link>
    ))}
  </nav>
)

export default Navigation
