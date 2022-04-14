import ButtonWithLabel from 'components/atoms/ButtonWithLabel'
import dynamic from 'next/dynamic'
import React from 'react'

const SocialMedia = dynamic(() => import('components/molecules/SocialMedia'))

const ConnectBanner = () => (
  <div className="my-16 sm:my-40">
    <ButtonWithLabel
      title="Let's make your designs a reality, together"
      slug="/contact"
      label="Connect Now"
      width="320px"
    />
    <br />
    <SocialMedia displayMailingListLink={false} position="justify-center" radix={64} />
  </div>
)

export default ConnectBanner
