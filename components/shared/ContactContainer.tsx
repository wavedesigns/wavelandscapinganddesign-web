import dynamic from 'next/dynamic'
import React from 'react'
import useInView from 'react-cool-inview'

const ContactForm = dynamic(() => import('components/organisms/contact/ContactForm'))
const OwnerBio = dynamic(() => import('components/organisms/contact/OwnerBio'))

interface Props {
  isBlue: boolean
}
const ContactContainer = ({ isBlue }: Props) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  })

  return (
    <div className={isBlue ? 'bg-darkBlue text-white py-12' : 'bg-white text-black'}>
      <div className="my-12 sm:my-0 mx-auto max-w-screen-xl">
        <div className="flex flex-col sm:flex-row mx-4 lg:mx-0" ref={observe}>
          {inView && (
            <>
              <OwnerBio />
              <ContactForm isBlue={isBlue} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactContainer
