import Logo from 'components/organisms/header/Logo'
import Menu from 'components/organisms/header/Menu'
import React from 'react'

const Header = () => (
  <header className="bg-white sm:sticky sm:top-0 py-1 drop-shadow-md">
    <div className="mx-auto my-4 sm:my-6 container flex justify-between">
      <Logo />
      <Menu />
    </div>
  </header>
)

export default Header
