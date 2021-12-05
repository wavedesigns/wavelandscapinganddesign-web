import { motion } from 'framer-motion'
import React from 'react'
import styles from 'styles/Banner.module.css'

const Banner = () => (
  <>
    <div className={`w-full bg-cover bg-center bg-home-banner ${styles.bannerHeight}`}>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center items-center p-16 lg:p-40 text-center h-full"
      >
        <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-serif text-white ${styles.heading}`}>
          Imagine your ideal outdoor space and{' '}
          <span className={`${styles.subTitle} block text-7xl lg:text-8xl xl:text-9xl font-bold`}>
            start living it
          </span>
        </h1>
      </motion.div>
    </div>
  </>
)

export default Banner
