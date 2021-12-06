import { render, screen } from '@testing-library/react'
import FormResponse from 'components/atoms/FormResponse'
import React from 'react'

const mockProps = {
  message: 'Success!',
}

describe('<FormResponse  />', () => {
  it('renders the message props', () => {
    render(<FormResponse {...mockProps} />)

    expect(screen.queryByText(mockProps.message)).toBeInTheDocument()
  })
})
