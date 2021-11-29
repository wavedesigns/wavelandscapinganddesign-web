import Banner from 'components/organisms/home/Banner'
import Services from 'components/organisms/home/Services'
import SiteHead from 'components/shared/SiteHead'
import React from 'react'
// import { getGalleryPhotos } from 'utils/fauna';
import { Gallery } from 'types/Gallery'

const SEO = {
  title: 'Wave Landscaping & Design: lawn maintenance and design services',
  metaDescription:
    'Wave Landscaping & Design is the premiere landscaping design and maintenance service in West Palm Beach, FL.',
}
interface Props {
  gallery: Gallery
}
const Home: React.FC<Props> = ({ gallery }: Props) => {
  return (
    <>
      <SiteHead {...SEO} />
      <Banner />
      <div className="bg-gray-200">
        <Services />
      </div>
    </>
  )
}

export default Home
