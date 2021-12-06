import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import useOnClickOutside from 'hooks/useOutsideClickHook'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { SITE_NAV } from 'utils/constants'

const transition = {
  transition: {
    opacity: {
      duration: 0.4,
    },
  },
}

const menuVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  in: {
    opacity: 1,
    x: 0,
    transition,
  },
  out: {
    opacity: 0,
    x: -200,
    transition,
  },
}

const MobileMenu = () => {
  const [dropDown, setDropDown] = useState<boolean>(false)
  const node = useRef<HTMLDivElement>(null)
  useOnClickOutside(node, () => setDropDown(false))

  return (
    <div ref={node} className="relative right-0">
      {dropDown ? (
        <button onClick={() => setDropDown(!dropDown)} aria-label="mobile menu">
          <XIcon className="h-10 w-10" />
        </button>
      ) : (
        <button onClick={() => setDropDown(!dropDown)} aria-label="mobile menu">
          <MenuIcon className="h-10 w-10" />
        </button>
      )}
      {dropDown && (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={menuVariants}
          className="flex flex-col justify-start fixed top-0 left-0 h-screen w-64 bg-gray-100 shadow rounded-sm z-50 m-0"
        >
          <div className="m-8">
            {SITE_NAV.map(({ id, slug, label }) => (
              <button key={id} className="mb-6 block" onClick={() => setDropDown(!dropDown)}>
                <Link href={slug}>
                  <a className="text-xl cursor-pointer hover:underline">{label}</a>
                </Link>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default MobileMenu
