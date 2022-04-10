import Image from 'next/image'
import React from 'react'

const LightBoxImage = ({ image }) => <Image {...image} srl_gallery_image="true" />

export default LightBoxImage
