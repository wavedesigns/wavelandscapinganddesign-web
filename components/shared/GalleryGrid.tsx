import SectionTitle from 'components/atoms/SectionTitle'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import useInView from 'react-cool-inview'
import { SRLWrapper } from 'simple-react-lightbox'
import { IGallery } from 'types/Gallery'

const GalleryImage = dynamic(() => import('components/molecules/GalleryImage'))

interface Props {
  gallery: IGallery[]
}

const GalleryGrid = ({ gallery }: Props) => {
  const router = useRouter()
  const isHome = router.asPath === '/'
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  })

  const options = {
    caption: {
      showCaption: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
    buttons: {
      showAutoplayButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
  }
  return (
    <SRLWrapper options={options}>
      <div className="px-4 py-4 sm:py-16 sm:pr-4 sm:pl-20">
        {isHome && <SectionTitle title="Gallery" />}
        <div
          className="mx-auto w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto mt-12"
          ref={observe}
        >
          {inView && gallery.map((photo) => <GalleryImage image={photo} key={photo.id} />)}
        </div>
      </div>
    </SRLWrapper>
  )
}

export default GalleryGrid
