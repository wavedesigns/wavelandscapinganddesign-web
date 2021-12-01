import { render, screen } from '@testing-library/react'
import ButtonWithLabel from 'components/molecules/ButtonWithLabel'
import React from 'react'

const mockProps = {
  label: 'Hello World',
  slug: '/welcome',
  title: 'Welcome to the app',
  width: '300px',
}

describe('<ButtonWithLabel />', () => {
  it('renders label prop', () => {
    render(<ButtonWithLabel {...mockProps} />)

    expect(screen.queryByText('Hello World')).toBeInTheDocument()
  })

  it('renders title prop', () => {
    render(<ButtonWithLabel {...mockProps} />)

    expect(screen.queryByText('Welcome to the app')).toBeInTheDocument()
  })

  it('renders the proper slug', () => {
    render(<ButtonWithLabel {...mockProps} />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/welcome')
  })
})
