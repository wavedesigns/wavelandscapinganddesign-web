import SectionTitle from 'components/atoms/SectionTitle'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import useInView from 'react-cool-inview'
import { Gallery } from 'types/Gallery'

const GalleryImage = dynamic(() => import('components/molecules/GalleryImage'))
interface Props {
  gallery: Gallery[]
}

const GalleryGrid = ({ gallery }: Props) => {
  const router = useRouter()
  const isHome = router.asPath === '/'
  // 467 x 350
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  })

  return (
    <div className="p-4 sm:p-16">
      {isHome && <SectionTitle title="Gallery" />}
      <div
        className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto mt-12"
        ref={observe}
      >
        {inView && gallery.map((photo) => <GalleryImage image={photo} key={photo.id} />)}
      </div>
    </div>
  )
}

export default GalleryGrid
