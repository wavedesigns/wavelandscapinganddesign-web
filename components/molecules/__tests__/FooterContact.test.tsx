import { render, screen } from '@testing-library/react'
import FooterContact from 'components/molecules/FooterContact'
import React from 'react'
import { PHONE } from 'utils/constants'

describe('<FooterContact />', () => {
  it('renders the contact label', () => {
    render(<FooterContact />)
    expect(screen.queryByText('Contact')).toBeInTheDocument()
  })

  it('renders contact email', () => {
    render(<FooterContact />)
    expect(screen.queryByText('wavelandscapingdesign@gmail.com')).toBeInTheDocument()
  })

  it('renders contact phone', () => {
    render(<FooterContact />)
    expect(screen.queryByText(PHONE)).toBeInTheDocument()
  })
})
