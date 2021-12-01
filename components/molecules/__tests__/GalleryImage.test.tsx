import { render, screen } from '@testing-library/react'
import GalleryImage from 'components/molecules/GalleryImage'
import React from 'react'

const mockProps = {
  src: 'https://res.cloudinary.com/tumulty-web-services/image/upload/v1613522318/wavelandscapinganddesign/gallery/lawn-longways.jpg',
  alt: 'Image One',
  tabIndex: 0,
}

describe('<GalleryImage />', () => {
  it('capture snapshot', () => {
    render(<GalleryImage {...mockProps} />)

    expect(screen).toMatchSnapshot()
  })
})
