import { render, screen } from '@testing-library/react'
import CareersForm from 'components/molecules/CareersForm'
import React from 'react'

const formLabels = ['career-full-name', 'career-phone', 'career-email', 'career-resume']
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
