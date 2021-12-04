import SectionTitle from 'components/atoms/SectionTitle'
import GalleryImage from 'components/molecules/GalleryImage'
import { useRouter } from 'next/router'
import React from 'react'
import { Gallery } from 'types/Gallery'

interface Props {
  gallery: Gallery[]
}

const GalleryGrid = ({ gallery }: Props) => {
  const router = useRouter()
  const isHome = router.asPath === '/'

  return (
    <div className="p-16">
      {isHome && <SectionTitle title="Gallery" />}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-auto mt-12">
        {gallery.map((photo, index) => (
          <GalleryImage {...photo} tabIndex={index} key={photo.id} />
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid
