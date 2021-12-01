import Logo from 'components/organisms/header/Logo'
import Menu from 'components/organisms/header/Menu'
import React from 'react'

const Header = () => (
  <header className="bg-white sm:sticky sm:top-0 py-1 drop-shadow-md z-50">
    <div className="mx-2 sm:mx-auto my-4 sm:my-6 container flex justify-between">
      <Logo />
      <Menu />
    </div>
  </header>
)

export default Header
