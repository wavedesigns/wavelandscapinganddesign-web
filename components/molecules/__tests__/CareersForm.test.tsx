import { render, screen } from '@testing-library/react'
import CareersForm from 'components/molecules/CareersForm'
import React from 'react'

const formLabels = ['full-name', 'phone', 'email', 'resume']
describe('<CareersForm />', () => {
  it('renders button label', () => {
    render(<CareersForm />)
    expect(screen.getByText('Send')).toBeInTheDocument()
  })

  formLabels.forEach((label) => {
    it(`renders the label ${label} input element`, () => {
      render(<CareersForm />)
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    })
  })
})
