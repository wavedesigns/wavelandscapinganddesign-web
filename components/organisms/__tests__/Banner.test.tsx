import { render, screen } from '@testing-library/react'
import Banner from 'components/organisms/home/Banner'
import React from 'react'

describe('<Banner/>', () => {
  it('renders title', () => {
    render(<Banner />)

    expect(screen.queryByText('start living it')).toBeInTheDocument()
  })
})
