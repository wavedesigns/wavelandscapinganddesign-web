import { render, screen } from '@testing-library/react'
import ServiceBlock from 'components/molecules/ServiceBlock'
import React from 'react'

const mockProps = {
  label: 'Hello World!',
  description: 'Describe your perfect day',
  slug: '/first-post',
  img: {
    src: 'https://res.cloudinary.com/tumulty-web-services/image/upload/c_scale,w_530/v1614878004/wavelandscapinganddesign/various/west-palm-beach-1193x693.webp',
    width: 300,
    height: 300,
    alt: 'Hello',
  },
}
describe('<ServiceBlock />', () => {
  it('renders the service label', () => {
    render(<ServiceBlock {...mockProps} />)
    expect(screen.queryByText(mockProps.label)).toBeInTheDocument()
  })

  it('renders the block link', () => {
    render(<ServiceBlock {...mockProps} />)
    expect(screen.getByText(mockProps.label).closest('a')).toHaveAttribute('href', mockProps.slug)
  })

  it('renders the image alt tag', () => {
    render(<ServiceBlock {...mockProps} />)
    expect(screen.getByAltText(mockProps.img.alt)).toBeInTheDocument()
  })
})
