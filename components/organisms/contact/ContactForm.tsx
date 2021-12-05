import Button from 'components/atoms/Button'
import InputText from 'components/atoms/InputText'
import kwesforms from 'kwesforms'
import React, { useEffect } from 'react'

interface Props {
  isBlue: boolean
}
const ContactForm = ({ isBlue }: Props) => {
  useEffect(() => kwesforms.init(), [])
  return (
    <>
      <div className="space-y-3 sm:space-y-4 w-full">
        <p className="text-xl font-serif">
          Or fill out the form below, and we&lsquo;ll get back to you shortly!
        </p>
        <form
          className={`kwes-form space-y-3 sm:space-y-4 ${isBlue ? 'text-white' : 'text-darkBlue'}`}
        >
          <InputText id="full-name" label="Full Name" type="text" />
          <InputText id="email" label="Email" type="email" />
          <InputText id="phone" label="Phone" type="text" />
          <InputText id="message" label="Message" type="textarea" />
          <Button label="Send" />
        </form>
      </div>
    </>
  )
}

export default ContactForm
