import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SOCIAL_MEDIA_LINKS } from 'utils/constants'

const generateSocialMediaLinks = (radix: number) => {
  const imageBase = `https://res.cloudinary.com/tumulty-web-services/image/upload/c_scale,ar_1:1,h_${radix},w_${radix}/v1615238531/wavelandscapinganddesign/social-media-icons/`

  return SOCIAL_MEDIA_LINKS.map((link) => ({
    ...link,
    image: {
      width: radix,
      height: radix,
      alt: link.label,
      src: imageBase + link.ext,
    },
  }))
}

interface Props {
  position: string
  radix: number
  displayMailingListLink?: boolean
}
const SocialMedia = ({ position, radix, displayMailingListLink }: Props) => {
  const socialMediaIcons = generateSocialMediaLinks(radix)

  return (
    <div className={`flex space-between items-center ${position}`} style={{ height: radix }}>
      {displayMailingListLink && (
        <Link href="/mailing-list">
          <a className="mr-4 font-serif text-darkBlue font-semibold text-xl hover:underline">
            Join our mailing list
          </a>
        </Link>
      )}
      {socialMediaIcons.map(({ id, slug, image, label }) => (
        <a
          title={label}
          key={id}
          href={slug}
          rel="noreferrer noopener"
          target="_blank"
          className="mx-2"
        >
          <Image {...image} />
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
