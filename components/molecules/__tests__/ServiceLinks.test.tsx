import { render, screen } from '@testing-library/react'
import ServiceLinks from 'components/molecules/ServiceLinks'
import React from 'react'

const mockProps = {
  links: [
    {
      id: 1,
      label: 'Hello World',
      slug: '/hello-world',
    },
  ],
}

describe('<ServiceLinks />', () => {
  it('renders the service label', () => {
    render(<ServiceLinks {...mockProps} />)
    expect(screen.queryByText(mockProps.links[0].label)).toBeInTheDocument()
  })

  it('renders the block link', () => {
    render(<ServiceLinks {...mockProps} />)
    expect(screen.getByText(mockProps.links[0].label).closest('a')).toHaveAttribute(
      'href',
      mockProps.links[0].slug
    )
  })
})
