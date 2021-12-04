import LinkRow from 'components/atoms/LinkRow'
import React from 'react'
import { SITE_NAV, SOCIAL_MEDIA_LINKS } from 'utils/constants'

const FOOTER_NAVS = [
  ...SITE_NAV,
  {
    id: 6,
    label: 'Sitemap',
    slug: '/sitemap.xml',
  },
  {
    id: 7,
    label: 'Privacy Policy',
    slug: '/privacy-policy',
  },
]
const FooterLinks = () => (
  <div className="flex flex-col md:flex-row">
    <LinkRow title="Navigation" links={FOOTER_NAVS} />
    <LinkRow title="Social Media" links={SOCIAL_MEDIA_LINKS} />
  </div>
)
export default FooterLinks
