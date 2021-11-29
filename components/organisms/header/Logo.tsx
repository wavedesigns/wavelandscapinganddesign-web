import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LOGO_IMAGE = {
  src: 'https://res.cloudinary.com/tumulty-web-services/image/upload/f_auto,c_limit,w_64,q_auto,r_max/wavelandscapinganddesign/various/Logo-80x80.webp',
  alt: 'Wave Landscaping & Design',
  width: 60,
  height: 60,
}

const Logo = () => (
  <div>
    <Link href="/">
      <a className="flex flex-col sm:flex-row">
        <div>
          <Image {...LOGO_IMAGE} layout="fixed" priority />
        </div>
        <div className="ml-0 sm:ml-4">
          <p className="text-3xl font-sans font-black hover:underline">
            Wave Landscaping &amp; Design
          </p>
          <p className="text-xl font-serif italic">
            Your landscaping should transport you to your very own personal getaway
          </p>
        </div>
      </a>
    </Link>
  </div>
)

export default Logo
