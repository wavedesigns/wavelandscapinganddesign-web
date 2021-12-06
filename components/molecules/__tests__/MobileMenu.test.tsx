import { fireEvent, render, screen } from '@testing-library/react'
import MobileMenu from 'components/molecules/MobileMenu'
import React from 'react'
import { SITE_NAV } from 'utils/constants'

const mockProps = {
  message: 'Success!',
}

describe('<MobileMenu  />', () => {
  it('renders the menu labels on click event', () => {
    render(<MobileMenu />)
    const button = screen.getByLabelText('mobile menu')
    fireEvent.click(button)

    SITE_NAV.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it('renders the menu slugs on click event', () => {
    render(<MobileMenu />)
    const button = screen.getByLabelText('mobile menu')
    fireEvent.click(button)

    SITE_NAV.forEach(({ label, slug }) => {
      expect(screen.getByText(label).closest('a')).toHaveAttribute('href', slug)
    })
  })
})
