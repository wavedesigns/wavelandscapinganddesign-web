import { fireEvent, render, screen } from '@testing-library/react'
import Button from 'components/atoms/Button'
import React from 'react'

const mockProps = {
  label: 'Hello World',
  handlePress: jest.fn(),
}

describe('<Button />', () => {
  it('renders label prop', () => {
    render(<Button {...mockProps} />)

    expect(screen.queryByText('Hello World')).toBeInTheDocument()
  })

  it('handles click event when defined', () => {
    render(<Button {...mockProps} />)

    fireEvent.click(screen.getByText(/Hello World/i))
    expect(mockProps.handlePress).toHaveBeenCalledTimes(1)
  })

  it('handles click event when handler is undefined', () => {
    render(<Button {...mockProps} handlePress={undefined} />)

    fireEvent.click(screen.getByText(/Hello World/i))
    expect(mockProps.handlePress).toHaveBeenCalled()
  })
})
