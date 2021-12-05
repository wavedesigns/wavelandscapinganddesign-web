import ButtonWithLabel from 'components/atoms/ButtonWithLabel'
import Banner from 'components/organisms/home/Banner'
import ConnectBanner from 'components/organisms/home/ConnectBanner'
import Services from 'components/organisms/home/Services'
import GalleryGrid from 'components/shared/GalleryGrid'
import SiteHead from 'components/shared/SiteHead'
import FadeInContainer from 'layouts/FadeInContainer'
import { GetStaticProps } from 'next'
import React from 'react'
import { Gallery } from 'types/Gallery'
import { formatGallery } from 'utils/helpers'

const cloudinary = require('utils/cloudinary')

const SEO = {
  title: 'Wave Landscaping & Design: lawn maintenance and design services',
  metaDescription:
    'Wave Landscaping & Design is the premiere landscaping design and maintenance service in West Palm Beach, FL.',
}

interface Props {
  gallery: Gallery[]
}

const Home = ({ gallery }: Props) => {
  const btnProps = {
    label: 'Full Gallery',
    slug: '/gallery',
    title: 'This is only a glimpse of what we can do',
    width: '320px',
  }
  return (
    <FadeInContainer>
      <SiteHead {...SEO} />
      <Banner />
      <div className="bg-gray-200">
        <Services />
        <GalleryGrid gallery={gallery} />
        <ButtonWithLabel {...btnProps} />
        <br />
      </div>
      <ConnectBanner />
    </FadeInContainer>
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
