import ContactForm from 'components/organisms/contact/ContactForm'
import OwnerBio from 'components/organisms/contact/OwnerBio'
import React from 'react'

interface Props {
  isBlue: boolean
}
const ContactContainer = ({ isBlue }: Props) => (
  <div className={isBlue ? 'bg-darkBlue text-white py-12' : 'bg-white text-black'}>
    <div className="my-12 sm:my-0 mx-auto max-w-screen-xl">
      <div className="flex flex-col sm:flex-row">
        <OwnerBio />
        <ContactForm isBlue={isBlue} />
      </div>
    </div>
  </div>
)

export default ContactContainer
