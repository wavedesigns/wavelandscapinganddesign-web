import fetch from 'node-fetch'
import { Email } from 'types/Email'
const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendSeverEmail = async ({ body, subject }: Email) => {
  const data = {
    personalizations: [
      {
        to: [
          {
            email: process.env.TO_EMAIL_ADDRESS,
          },
        ],
        subject,
      },
    ],
    from: {
      email: 'noreply@wavelandscapinganddesign.com',
      name: '<noreply@wavelandscapinganddesign.com>',
    },
    content: [
      {
        type: 'text/html',
        value: body,
      },
    ],
  }

  const request = await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify(data),
  })
    .then((data) => data)
    .catch((err) => err)

  return request
}

export default sendSeverEmail
