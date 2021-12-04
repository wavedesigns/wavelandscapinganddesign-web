import ContactForm from 'components/organisms/contact/ContactForm'
import OwnerBio from 'components/organisms/contact/OwnerBio'
import React from 'react'

interface Props {
  isBlue: boolean
}
const ContactContainer = ({ isBlue }: Props) => (
  <div
    className={`flex flex-col sm:flex-row sm:justify-between ${
      isBlue ? 'bg-darkBlue text-white' : 'bg-white text-blackk'
    }`}
  >
    <OwnerBio />
    <ContactForm />
  </div>
)

export default ContactContainer
