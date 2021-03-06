import ButtonWithLabel from 'components/atoms/ButtonWithLabel'
import Banner from 'components/organisms/home/Banner'
import SiteHead from 'components/shared/SiteHead'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import { IGallery } from 'types/Gallery'
import { formatGallery } from 'utils/helpers'

const ConnectBanner = dynamic(() => import('components/organisms/home/ConnectBanner'), {
  ssr: false,
})
const GalleryGrid = dynamic(() => import('components/shared/GalleryGrid'), { ssr: false })
const Services = dynamic(() => import('components/organisms/home/Services'), { ssr: false })

const cloudinary = require('utils/cloudinary')

const SEO = {
  title: 'Wave Landscaping & Design: lawn maintenance and design services',
  metaDescription:
    'Wave Landscaping & Design is the premiere landscaping design and maintenance service in West Palm Beach, FL.',
}

interface Props {
  gallery: IGallery[]
}

const Home = ({ gallery }: Props) => {
  const btnProps = {
    label: 'Full Gallery',
    slug: '/gallery',
    title: 'This is only a glimpse of what we can do',
    width: '320px',
  }
  return (
    <>
      <SiteHead {...SEO} />
      <Banner />
      <div className="bg-gray-200">
        <Services />
        <GalleryGrid gallery={gallery} />
        <ButtonWithLabel {...btnProps} />
        <br />
      </div>
      <ConnectBanner />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const request = await cloudinary.api
    .resources({
      resource_type: 'image',
      type: 'upload',
      prefix: 'wavelandscapinganddesign/gallery',
      max_results: 9,
      context: true,
    })
    .then((res) => res.resources)

  const radix = { width: 467, height: 350 }
  const gallery = formatGallery(request, radix)

  return {
    props: {
      gallery,
    },
  }
}

export default Home
