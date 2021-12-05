import { render, screen } from '@testing-library/react'
import FooterLinks from 'components/molecules/FooterLinks'
import React from 'react'
import { SITE_NAV, SOCIAL_MEDIA_LINKS } from 'utils/constants'

describe('<FooterLinks />', () => {
  it('renders the Navigation label', () => {
    render(<FooterLinks />)

    expect(screen.queryByText('Navigation')).toBeInTheDocument()
  })

  SITE_NAV.forEach((link) =>
    it(`renders the proper link with the label ${link.label}`, () => {
      render(<FooterLinks />)
      expect(screen.getByText(link.label).closest('a')).toHaveAttribute('href', link.slug)
    })
  )
  SOCIAL_MEDIA_LINKS.forEach((link) =>
    it(`renders the proper social media link with the label ${link.label}`, () => {
      render(<FooterLinks />)
      expect(screen.getByText(link.label).closest('a')).toHaveAttribute('href', link.slug)
    })
  )
})
