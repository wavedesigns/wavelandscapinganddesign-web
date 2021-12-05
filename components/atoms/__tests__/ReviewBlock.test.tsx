import { render, screen } from '@testing-library/react'
import ReviewBlock from 'components/atoms/ReviewBlock'
import React from 'react'

const mockProps = {
  name: 'Tester',
  quote: 'Tester quote',
}

describe('<ReviewBlock {...mockProps} />', () => {
  it('renders reviewer name', () => {
    render(<ReviewBlock {...mockProps} />)
    expect(screen.queryByText(`- ${mockProps.name}`)).toBeInTheDocument()
  })

  it('renders reviewer quote', () => {
    render(<ReviewBlock {...mockProps} />)
    expect(screen.queryByText(mockProps.quote)).toBeInTheDocument()
  })
})
