import Button from 'components/atoms/Button'
import InputText from 'components/atoms/InputText'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { FAILED_EMAIL_MESSAGE, successEmailMessage } from 'utils/constants'
import sendClientEmail from 'utils/email/client-handler'

const FormResponse = dynamic(() => import('components/atoms/FormResponse'))

interface Props {
  isBlue: boolean
}

interface Form {
  fullName: string
  email: string
  phone: string
  message: string
}

const ContactForm = ({ isBlue }: Props) => {
  const [form, setForm] = useState<unknown | Form>()
  const [confirm, setConfirm] = useState<boolean>(false)
  const [response, setResponse] = useState<string>('')

  const onChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const event = e.target as HTMLFormElement
    const value = event.value
    const name = event.name
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let confirMessage = ''
    const subject = 'Someone messaged you from wavelandscapinganddesign.com'
    const details = form as Form
    const { message, fullName, email, phone } = details
    const body = `
      <h2>There was a recent submission to the contact form on wavelandscapinganddesign.com</h2>
      <p style="margin-bottom:35px; font-size: 18px;"><u>Here are the details:</u></p>
      <p style="margin-bottom:12px; font-size: 18px;"><strong>Full name: </strong>${fullName}</p>
      <p style="margin-bottom:12px; font-size: 18px;"><strong>Email: </strong>${email}</p>
      <p style="margin-bottom:12px; font-size: 18px;"><strong>Phone: </strong>${phone}</p>
      <p style="margin-bottom:12px; font-size: 18px;"><strong>Message</strong></p>
      <p>${message}</p>
    `

    const request = await sendClientEmail({ subject, body })

    if (request.status === 200) {
      confirMessage = successEmailMessage('contact')

      setResponse(confirMessage)
      setConfirm(true)
    }

    if (request.status === 500) {
      confirMessage = FAILED_EMAIL_MESSAGE

      setResponse(confirMessage)
      setConfirm(true)
    }
  }

  if (confirm) {
    return <FormResponse message={response} />
  }

  return (
    <>
      <div className="space-y-3 sm:space-y-4 w-full">
        <p className="text-xl font-serif">
          Or fill out the form below, and we&lsquo;ll get back to you shortly!
        </p>
        <form
          onSubmit={onSubmitHandler}
          onChange={onChangeHandler}
          className={`space-y-3 sm:space-y-4 ${isBlue ? 'text-white' : 'text-darkBlue'}`}
        >
          <InputText id="full-name" name="fullName" label="Full Name" type="text" />
          <InputText id="email" name="email" label="Email" type="email" />
          <InputText id="phone" name="phone" label="Phone" type="text" />
          <InputText id="message" name="message" label="Message" type="textarea" />
          <Button label="Send" />
        </form>
      </div>
    </>
  )
}

export default ContactForm
