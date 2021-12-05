import { render, screen } from '@testing-library/react'
import FooterMap from 'components/atoms/FooterMap'
import React from 'react'

describe('<FooterMap />', () => {
  it('renders image alt text', () => {
    render(<FooterMap />)

    expect(screen.queryByAltText('Wave Landscaping Design Location')).toBeInTheDocument()
  })
})
