import { buildUrl } from 'cloudinary-build-url'
import { IGallery } from 'types/Gallery'

interface Radix {
  width: number
  height: number
}
export const formatGallery = (gallery: any, radix: Radix): IGallery[] =>
  gallery.map(({ asset_id, public_id }) => {
    const splitId = public_id.split('/')
    const alt = splitId[splitId.length - 1]
    const { width, height } = radix

    /** Use Cloudinary build url */
    const src = buildUrl(public_id, {
      cloud: {
        cloudName: process.env.CLOUDINARY_NAME,
      },
      transformations: {
        format: 'webp',
        resize: {
          type: 'scale',
          width,
          height,
        },
      },
    })

    const previewUrl = buildUrl(public_id, {
      cloud: {
        cloudName: process.env.CLOUDINARY_NAME,
      },
      transformations: {
        format: 'webp',
        resize: {
          type: 'scale',
          width: Math.floor(width * 4.5),
          height: Math.floor(height * 4.5),
        },
      },
    })

    return {
      id: asset_id,
      src,
      alt,
      width,
      height,
      previewUrl,
    }
  })
