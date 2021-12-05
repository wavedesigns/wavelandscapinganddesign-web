import Navigation from 'components/molecules/Navigation'
import SocialMedia from 'components/molecules/SocialMedia'
import React from 'react'

const Menu = () => (
  <>
    <div className="hidden lg:block">
      <SocialMedia position="justify-end" radix={32} />
      <Navigation />
    </div>
    <div className="block lg:hidden">Menu...</div>
  </>
)

export default Menu
