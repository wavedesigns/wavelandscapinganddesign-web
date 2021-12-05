import { render, screen } from '@testing-library/react'
import InputText from 'components/atoms/InputText'
import React from 'react'

const mockProps = {
  id: 'test-input',
  label: 'Hello World',
  type: 'phone',
}

describe('<InputText />', () => {
  it('renders the proper name attribute', () => {
    render(<InputText {...mockProps} />)
    const input: HTMLInputElement = screen.getByLabelText('test-input')
    expect(input.name).toBe(mockProps.id)
  })

  it('renders different name attribute after prop change', () => {
    render(<InputText {...mockProps} id="test-second-input" />)
    const input: HTMLInputElement = screen.getByLabelText('test-second-input')

    expect(input.name).toBe('test-second-input')
    expect(input.name).not.toBe('test-input')
  })

  it('renders the input element when the type prop is "phone"', () => {
    const { container } = render(<InputText {...mockProps} type="phone" />)

    expect(container.querySelector('textarea')).toBeNull()
  })

  it('renders the correct element when the type prop is changed to "textarea"', () => {
    const { container } = render(<InputText {...mockProps} type="textarea" />)

    expect(container.querySelector('textarea')).not.toBeNull()
  })
})
