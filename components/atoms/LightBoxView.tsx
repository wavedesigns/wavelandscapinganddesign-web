import 'react-image-lightbox/style.css'

import React from 'react'
import Lightbox from 'react-image-lightbox'

interface Props {
  src: string
  setIsOpen: (e: boolean) => void
}

const LightBoxView = ({ src, setIsOpen }: Props) => {
  return (
    <>
      <Lightbox mainSrc={src} onCloseRequest={() => setIsOpen(false)} />
    </>
  )
}

export default LightBoxView
