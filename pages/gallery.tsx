import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import { GetServerSideProps, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import { IGallery as GalleryImages } from 'types/Gallery'
import { formatGallery } from 'utils/helpers'

const GalleryGrid = dynamic(() => import('components/shared/GalleryGrid'))
const ContactContainer = dynamic(() => import('components/shared/ContactContainer'))

const cloudinary = require('utils/cloudinary')

const SEO = {
  title: 'Wave Landscaping & Design: Gallery of our work and services',
  metaDescription:
    'Wave Landscaping & Design gallery of our previous work, if you see something you get in touch today!',
}

interface Props {
  gallery: GalleryImages[]
}

const Gallery = ({ gallery }: Props) => {
  return (
    <>
      <SiteHead {...SEO} />
      <PageBanner title="Gallery" />
      <GalleryGrid gallery={gallery} />
      <ContactContainer isBlue={true} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const request = await cloudinary.api
    .resources({
      resource_type: 'image',
      type: 'upload',
      prefix: 'wavelandscapinganddesign/gallery',
      max_results: 100,
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

export default Gallery
