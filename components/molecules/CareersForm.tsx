import Button from 'components/atoms/Button'
import FormResponse from 'components/atoms/FormResponse'
import InputText from 'components/atoms/InputText'
import React, { useState } from 'react'
import { FAILED_EMAIL_MESSAGE, successEmailMessage } from 'utils/constants'
import sendClientEmail from 'utils/email/client-handler'

interface Form {
  cFullName: string
  cEmail: string
  cPhone: string
  cResume: string
}
const CareersForm = () => {
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
    let message = ''
    const subject = 'Someone applied for a job on wavelandscapinganddesign.com'
    const details = form as Form
    const { cResume, cFullName, cEmail, cPhone } = details
    const body = `
      <h2>There was a recent submission to the careers form on wavelandscapinganddesign.com</h2>
      <p style="margin-bottom:35px; font-size: 18px;"><u>Here are the details:</u></p>
      <p style="margin-bottom:12px; font-size: 18px;"><strong>Full name: </strong>${cFullName}</p>
      <p style="margin-bottom:12px; font-size: 18px;"><strong>Email: </strong>${cEmail}</p>
      <p style="margin-bottom:12px; font-size: 18px;"><strong>Phone: </strong>${cPhone}</p>
      <p style="margin-bottom:12px; font-size: 18px;"><strong>Resume</strong></p>
      <p>${cResume}</p>

    `
    const request = await sendClientEmail({ subject, body })

    if (request.status === 200) {
      message = successEmailMessage('career')

      setResponse(message)
      setConfirm(true)
    }

    if (request.status === 500) {
      message = FAILED_EMAIL_MESSAGE

      setResponse(message)
      setConfirm(true)
    }
  }

  if (confirm) {
    return <FormResponse message={response} />
  }

  if (!confirm) {
    return (
      <div className="space-y-6 sm:space-y-5 mt-8 lg:mt-0 sm:mx-auto sm:max-w-xl sm:mt-12">
        <form
          onSubmit={onSubmitHandler}
          onChange={onChangeHandler}
          className="space-y-6 sm:space-y-5"
        >
          <InputText id="career-full-name" name="cFullName" label="Full Name" type="text" />
          <InputText id="career-email" name="cEmail" label="Email" type="email" />
          <InputText id="career-phone" name="cPhone" label="Phone" type="text" />
          <InputText id="career-resume" name="cResume" label="Resume" type="textarea" />
          <Button label="Send" />
        </form>
      </div>
    )
  }

  return null
}

export default CareersForm
