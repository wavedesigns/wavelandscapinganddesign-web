import { render, screen } from '@testing-library/react'
import LinkRow from 'components/atoms/LinkRow'
import React from 'react'

const mockProps = {
  title: 'Test Link',
  links: [
    {
      id: 1,
      label: 'Hello World',
      slug: '/hello-world',
    },
  ],
}

describe('<LinkRow {...mockProps} />', () => {
  it('renders component title', () => {
    render(<LinkRow {...mockProps} />)

    expect(screen.queryByText(mockProps.title)).toBeInTheDocument()
  })

  it('renders link slug', () => {
    render(<LinkRow {...mockProps} />)

    expect(screen.getByText(mockProps.links[0].label).closest('a')).toHaveAttribute(
      'href',
      mockProps.links[0].slug
    )
  })

  it('renders link label', () => {
    render(<LinkRow {...mockProps} />)
    expect(screen.queryByText(mockProps.links[0].label)).toBeInTheDocument()
  })
})
