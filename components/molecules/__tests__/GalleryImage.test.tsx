import { render, screen } from '@testing-library/react'
import GalleryImage from 'components/molecules/GalleryImage'
import React from 'react'

/**
 *  Actually, figure out tests for these...
 */
const mockProps = {
  image: {
    src: 'https://res.cloudinary.com/tumulty-web-services/image/upload/v1613522318/wavelandscapinganddesign/gallery/lawn-longways.jpg',
    alt: 'Image One',
    width: '300',
    height: '400',
    id: 1,
  },
}

describe('<GalleryImage />', () => {
  it('capture snapshot', () => {
    render(<GalleryImage {...mockProps} />)

    expect(screen).toMatchSnapshot()
  })
})
