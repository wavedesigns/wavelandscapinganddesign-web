import { render, screen } from '@testing-library/react'
import Header from 'components/shared/Header'
import React from 'react'

describe('<Header/>', () => {
  it('renders snapshot', () => {
    render(<Header />)
    expect(screen).toMatchSnapshot()
  })
})
