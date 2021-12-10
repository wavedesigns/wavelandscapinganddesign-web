import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useState } from 'react'
import { Gallery } from 'types/Gallery'

const LightBoxView = dynamic(() => import('components/atoms/LightBoxView'))
interface Props {
  image: Gallery
}

const GalleryImage = ({ image }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { src, alt, width, height, previewUrl } = image
  const imageProps = { src, alt, width, height }

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        aria-label={alt}
        onClick={() => setIsOpen(true)}
        onKeyPress={() => setIsOpen(true)}
        className="mx-auto lg:mb-8"
      >
        <Image {...imageProps} />
      </div>
      {isOpen && <LightBoxView src={previewUrl} setIsOpen={setIsOpen} />}
    </>
  )
}

export default GalleryImage
