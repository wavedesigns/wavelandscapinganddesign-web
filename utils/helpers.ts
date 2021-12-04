import { Gallery } from 'types/Gallery'

export const formatGallery = (gallery: any): Gallery[] =>
  gallery.map(({ asset_id, secure_url, width, height, public_id }) => {
    const splitId = public_id.split('/')
    const alt = splitId[splitId.length - 1]
    return {
      id: asset_id,
      src: secure_url,
      alt,
      width,
      height,
    }
  })
