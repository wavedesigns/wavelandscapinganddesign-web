import { render, screen } from '@testing-library/react'
import SocialMedia from 'components/molecules/SocialMedia'
import React from 'react'
import { SITE_NAV, SOCIAL_MEDIA_LINKS } from 'utils/constants'

const mockProps = {
  position: 'justify-end',
  radix: 64,
  displayMailingListLink: true,
}

describe('<SocialMedia />', () => {
  SOCIAL_MEDIA_LINKS.forEach((link) =>
    it(`renders the proper social media link with the label ${link.label}`, () => {
      render(<SocialMedia {...mockProps} />)
      expect(screen.getByAltText(link.label).closest('a')).toHaveAttribute('href', link.slug)
    })
  )

  SOCIAL_MEDIA_LINKS.forEach((link) =>
    it(`renders the proper image alt tag with the ${link.label}`, () => {
      render(<SocialMedia {...mockProps} />)
      expect(screen.getByAltText(link.label).closest('a')).toHaveAttribute('href', link.slug)
    })
  )
})
