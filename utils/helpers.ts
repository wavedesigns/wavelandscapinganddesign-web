import { Gallery } from 'types/Gallery'

export const formatGallery = (gallery: any): Gallery[] =>
  gallery.map(({ asset_id, secure_url, width, height, public_id }) => {
    const splitId = public_id.split('/')
    const alt = splitId[splitId.length - 1]
    const splitUrl = secure_url.split('.')
    const src = `${splitUrl.slice(0, -1).join('.')}.webp`

    return {
      id: asset_id,
      src,
      alt,
      width,
      height,
    }
  })
