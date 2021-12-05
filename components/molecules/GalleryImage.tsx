import LightBoxView from 'components/atoms/LightBoxView'
import React, { useState } from 'react'

interface Props {
  src: string
  alt: string
}

const GalleryImage = ({ src, alt }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <div
        tabIndex={0}
        role="button"
        aria-label={alt}
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: '350px',
          width: '100%',
          borderRadius: '5px',
        }}
        onClick={() => setIsOpen(true)}
        onKeyPress={() => setIsOpen(true)}
      />
      {isOpen && <LightBoxView src={src} setIsOpen={setIsOpen} />}
    </>
  )
}

export default GalleryImage
