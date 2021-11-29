import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import 'tailwindcss/tailwind.css'

const SiteHead = () => (
  <Head>
    <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/images/favicon/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#2e3a52" />
    <meta name="theme-color" content="#2e3a52" />
  </Head>
)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SiteHead />
      <Component {...pageProps} />
    </>
  )
}

export default App
