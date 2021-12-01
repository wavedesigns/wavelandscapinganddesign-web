import { render, screen } from '@testing-library/react'
import SectionTitle from 'components/atoms/SectionTitle'
import React from 'react'

const mockProps = {
  title: 'Hello World!',
}

describe('<SectionTitle />', () => {
  it('renders title props', () => {
    render(<SectionTitle {...mockProps} />)

    expect(screen.queryByText('Hello World!')).toBeInTheDocument()
  })

  it('does not render incorrect title prop', () => {
    render(<SectionTitle {...mockProps} />)

    expect(screen.queryByText('Hello World')).toBeNull()
  })
})
