import React from 'react'
import { PHONE } from 'utils/constants'

const FooterContact = () => {
  return (
    <div className="flex flex-col mb-6 lg:mb-0 ">
      <p className="text-darkBlue font-serif font-bold text-xl">Contact</p>
      <p className="font-serif text-base my-2">
        <strong className="text-darkBlue font-bold">Email </strong>wavelandscapingdesign@gmail.com
      </p>
      <p className="font-serif text-base mb-2">
        <strong className="text-darkBlue font-bold">Phone </strong>
        {PHONE}
      </p>
      <p className="text-darkBlue font-serif font-bold text-base">
        Based out of Palm Beach, Florida
      </p>
    </div>
  )
}

export default FooterContact
