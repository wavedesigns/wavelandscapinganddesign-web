import { render, screen } from '@testing-library/react'
import Navigation from 'components/molecules/Navigation'
import React from 'react'

describe('<Navigation />', () => {
  it('renders label prop', () => {
    render(<Navigation />)

    expect(screen.queryByText('Contact')).toBeInTheDocument()
  })

  it('renders the proper slug', () => {
    render(<Navigation />)
    const href = screen.getAllByRole('link')
    expect(href[0]).toHaveAttribute('href', '/services')
  })
})
