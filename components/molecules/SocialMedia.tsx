import Image from 'next/image'
import React from 'react'

const generateSocialMediaLinks = (radix: number) => {
  const imageBase = `https://res.cloudinary.com/tumulty-web-services/image/upload/c_scale,ar_1:1,h_${radix},w_${radix}/v1615238531/wavelandscapinganddesign/social-media-icons/`
  const fbImageUrl = `${imageBase}FB-250x250.jpg`
  const instaImageUrl = `${imageBase}Instagram-250x250.jpg`
  const tikTokImageUrl = `${imageBase}TikTok-245x268.jpg`

  return [
    {
      id: 1,
      url: 'https://www.facebook.com/wavelandscapingdesign',
      image: {
        src: fbImageUrl,
        alt: 'facebook',
        width: radix,
        height: radix,
      },
    },
    {
      id: 2,
      url: 'https://www.instagram.com/wavelandscapingdesign',
      image: {
        src: instaImageUrl,
        alt: 'instagram',
        width: radix,
        height: radix,
      },
    },
    {
      id: 3,
      url: 'https://www.tiktok.com/@wavelandscapingdesign',
      image: {
        src: tikTokImageUrl,
        alt: 'tik tok',
        width: radix,
        height: radix,
      },
    },
  ]
}

interface Props {
  position: string
  radix: number
}
const SocialMedia = ({ position, radix }: Props) => {
  const socialMediaIcons = generateSocialMediaLinks(radix)

  return (
    <div className={`flex space-between ${position}`}>
      {socialMediaIcons.map(({ id, url, image }) => (
        <a key={id} href={url} rel="noreferrer noopener" className="mx-2">
          <Image {...image} />
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
