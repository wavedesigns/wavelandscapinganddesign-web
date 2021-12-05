import FooterMap from 'components/atoms/FooterMap'
import FooterContact from 'components/molecules/FooterContact'
import FooterLinks from 'components/molecules/FooterLinks'
import React from 'react'

const Body = () => (
  <div className="w-100 flex flex-col lg:flex-row justify-between max-w-screen-xl mx-4 lg:mx-auto py-12">
    <FooterLinks />
    <FooterContact />
    <FooterMap />
  </div>
)

export default Body
