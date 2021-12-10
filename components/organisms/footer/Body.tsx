import FooterContact from 'components/molecules/FooterContact'
import FooterLinks from 'components/molecules/FooterLinks'
import React from 'react'

const Body = () => (
  <div className="w-100 flex flex-col lg:flex-row max-w-screen-xl mx-4 lg:mx-auto pt-6">
    <FooterLinks />
    <FooterContact />
  </div>
)

export default Body
