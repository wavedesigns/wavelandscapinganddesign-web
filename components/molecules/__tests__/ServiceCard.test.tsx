import { render, screen } from '@testing-library/react'
import ServiceCard from 'components/molecules/ServiceCard'
import React from 'react'

const mockProps = {
  service: {
    title: 'Hello World',
    description: 'Describe your perfect day',
    displayImage: {
      id: 1,
      fileName: 'the-file.jpeg',
      url: 'https://res.cloudinary.com/tumulty-web-services/image/upload/c_scale,w_530/v1614878004/wavelandscapinganddesign/various/west-palm-beach-1193x693.webp',
    },
  },
  index: 0,
}
describe('<ServiceCard />', () => {
  it('renders the service title', () => {
    render(<ServiceCard {...mockProps} />)
    expect(screen.queryByText(mockProps.service.title)).toBeInTheDocument()
  })

  it('renders the service description', () => {
    render(<ServiceCard {...mockProps} />)
    expect(screen.queryByText(mockProps.service.description)).toBeInTheDocument()
  })

  it('renders the service image', () => {
    render(<ServiceCard {...mockProps} />)
    expect(screen.queryByAltText(mockProps.service.title)).toBeInTheDocument()
  })
})
