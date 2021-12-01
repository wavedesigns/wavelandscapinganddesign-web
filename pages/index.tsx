import ButtonWithLabel from 'components/molecules/ButtonWithLabel'
import Banner from 'components/organisms/home/Banner'
import ConnectBanner from 'components/organisms/home/ConnectBanner'
import GalleryGrid from 'components/organisms/home/GalleryGrid'
import Services from 'components/organisms/home/Services'
import SiteHead from 'components/shared/SiteHead'
import FadeInContainer from 'layouts/FadeInContainer'
import { GetStaticProps } from 'next'
import React from 'react'
import { Gallery } from 'types/Gallery'

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

  const gallery = request.map(({ asset_id, secure_url, width, height, public_id }) => {
    const splitId = public_id.split('/')
    const alt = splitId[splitId.length - 1]
    return {
      id: asset_id,
      src: secure_url,
      alt,
      width,
      height,
    }
  })

  return {
    props: {
      gallery,
    },
  }
}

export default Home
