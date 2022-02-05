import 'tailwindcss/tailwind.css'
import 'react-image-lightbox/style.css'
import 'styles/global.css'

import Header from 'components/shared/Header'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Footer = dynamic(() => import('components/shared/Footer'), { ssr: false })
const SiteHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
    <link rel="icon" href="/images/favicons/favicon.ico" />
    <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SiteHead />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
