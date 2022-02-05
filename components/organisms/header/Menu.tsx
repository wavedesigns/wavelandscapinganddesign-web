import Navigation from 'components/molecules/Navigation'
import SocialMedia from 'components/molecules/SocialMedia'
import dynamic from 'next/dynamic'
import React from 'react'

const MobileMenu = dynamic(() => import('components/molecules/MobileMenu'))
const Menu = () => (
  <>
    <div className="hidden lg:block">
      <SocialMedia position="justify-end" radix={32} />
      <Navigation />
    </div>
    <div className="block lg:hidden">
      <MobileMenu />
    </div>
  </>
)

export default Menu
