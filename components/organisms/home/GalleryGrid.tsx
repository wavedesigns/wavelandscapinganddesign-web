import SectionTitle from 'components/atoms/SectionTitle'
import GalleryImage from 'components/molecules/GalleryImage'
import React from 'react'
import { Gallery } from 'types/Gallery'

interface Props {
  gallery: Gallery[]
}

const GalleryGrid = ({ gallery }: Props) => {
  return (
    <div className="p-16">
      <SectionTitle title="Gallery" />
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-auto mt-12">
        {gallery.map((photo, index) => (
          <GalleryImage {...photo} tabIndex={index} key={photo.id} />
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid
