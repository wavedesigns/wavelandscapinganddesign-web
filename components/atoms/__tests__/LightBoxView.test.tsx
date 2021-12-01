import { render, screen } from '@testing-library/react'
import LightBoxView from 'components/atoms/LightBoxView'
import React from 'react'

/**
 *  Actually, figure out tests for these...
 */

const mockProps = {
  src: 'https://res.cloudinary.com/tumulty-web-services/image/upload/v1613522318/wavelandscapinganddesign/gallery/lawn-longways.jpg',
  setIsOpen: jest.fn(),
}

describe('<LightBoxView />', () => {
  it('capture snapshot', () => {
    render(<LightBoxView {...mockProps} />)

    expect(screen).toMatchSnapshot()
  })
})
