import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
  metaDescription: string
}
const SiteHead: React.FC<Props> = ({ title, metaDescription }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://wavelandscapinganddesign.com" />
      <meta property="og:image" content="/images/Logo-100x100-round.png" />
      <meta property="og:description" content={metaDescription} />
    </Head>
  )
}

export default SiteHead
