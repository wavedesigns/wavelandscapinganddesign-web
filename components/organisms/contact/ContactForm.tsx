import Button from 'components/atoms/Button'
import InputText from 'components/atoms/InputText'
import React from 'react'

const ContactForm = () => (
  <div className="space-y-6 sm:space-y-5 max-w-7xl">
    <form className="space-y-6 sm:space-y-5">
      <InputText id="full-name" label="Full Name" type="text" />
      <InputText id="email" label="Email" type="email" />
      <InputText id="phone" label="Phone" type="text" />
      <InputText id="resume" label="Resume" type="file" />
      <Button label="Send" />
    </form>
  </div>
)

export default ContactForm
