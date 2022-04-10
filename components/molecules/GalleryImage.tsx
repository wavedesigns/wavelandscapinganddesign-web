import LightBoxImage from 'components/atoms/LightBoxImage'
import React from 'react'
import { IGallery } from 'types/Gallery'

interface Props {
  image: IGallery
}

const GalleryImage = ({ image }: Props) => {
  const { src, alt, width, height, previewUrl } = image
  const imageProps = { src, alt, width, height }
  return (
    <a className="block lg:mb-8" title={alt} href={previewUrl}>
      <LightBoxImage image={imageProps} />
    </a>
  )
}

export default GalleryImage
