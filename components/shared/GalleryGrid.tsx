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
    <div className="p-4 sm:p-16">
      {isHome && <SectionTitle title="Gallery" />}
      <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mx-auto mt-12">
        {gallery.map((photo, index) => (
          <GalleryImage {...photo} key={photo.id} />
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid
