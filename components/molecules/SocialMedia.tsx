import Image from 'next/image'
import React from 'react'

const SOCIAL_MEDIA = [
  {
    id: 1,
    url: 'https://www.facebook.com/wavelandscapingdesign',
    image: {
      src: '/images/social-media/facebook-40x40.webp',
      alt: 'facebook',
      width: 32,
      height: 32,
    },
  },
  {
    id: 2,
    url: 'https://www.instagram.com/wavelandscapingdesign',
    image: {
      src: '/images/social-media/instagram-40x40.webp',
      alt: 'instagram',
      width: 32,
      height: 32,
    },
  },
  {
    id: 3,
    url: 'https://www.tiktok.com/@wavelandscapingdesign',
    image: {
      src: '/images/social-media/tiktok-40x40.webp',
      alt: 'tik tok',
      width: 32,
      height: 32,
    },
  },
]

interface Props {
  position: string
}
const SocialMedia: React.FC<Props> = ({ position }: Props) => (
  <div className={`flex space-between ${position}`}>
    {SOCIAL_MEDIA.map(({ id, url, image }) => (
      <a key={id} href={url} rel="noreferrer noopener" className="mx-2">
        <Image {...image} />
      </a>
    ))}
  </div>
)

export default SocialMedia
