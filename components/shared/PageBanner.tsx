import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  title: string
}

const PageBanner = ({ title }: Props) => {
  return (
    <>
      <div className="w-full bg-cover bg-center bg-back-banner">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-center items-center p-16 lg:p-32 text-center h-full"
        >
          <div className="title-wrapper">
            <h1 className="text-6xl sm:text-8xl font-serif text-white text-center">{title}</h1>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        h1 {
          text-shadow: 2px 3px 8px #000;
        }

        .title-wrapper {
          border: 3px solid #fff;
          display: block;
          padding: 2em 4.8em 3em 4.8em;
        }
      `}</style>
    </>
  )
}

export default PageBanner
