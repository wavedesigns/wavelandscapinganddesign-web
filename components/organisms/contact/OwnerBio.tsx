import Image from 'next/image'
import React from 'react'
import { PHONE } from 'utils/constants'

const SAM_IMAGE =
  'https://res.cloudinary.com/tumulty-web-services/image/upload/f_auto,c_limit,w_1920,q_auto/wavelandscapinganddesign/various/sam-barnwell.webp'

const OwnerBio = () => (
  <div className="w-full mb-8 sm:mb-0 sm:mr-10">
    <p className="text-xl font-serif">
      Interested in learning more about our services? Email or call us today and receive a free
      estimate!
    </p>
    <p className="text-xl font-serif mt-4 mb-1">
      <strong>Phone: </strong>
      {PHONE}
    </p>
    <p className="text-xl font-serif mb-4 mt-0">
      <strong>Email: </strong>
      <a href="mailto:wavelandscapingdesign@gmail.com">wavelandscapingdesign@gmail.com</a>
    </p>
    <Image src={SAM_IMAGE} alt="Sam Barnwell" width={636} height={363} />
  </div>
)

export default OwnerBio
