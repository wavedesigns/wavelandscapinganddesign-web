import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://wavelandscapinganddesign.com'
    : 'http://localhost:4001'
interface Props {
  title: string
  metaDescription: string
}
const SiteHead = ({ title, metaDescription }: Props) => {
  const router = useRouter()
  const slug = router.asPath
  const currentUrl = SITE_URL + slug
  const structuredData = `{"@context":"https://schema.org/","@type":"WebSite","name":"Wave Landscaping & Design","url":"https://www.unleashedpotentiallifecoaching.com","potentialAction":{"@type":"SearchAction","target":"{search_term_string}","query-input":"required name=search_term_string"}}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content="/images/favicons/android-chrome-144x144.png" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="/images/favicons/android-chrome-144x144.png"></meta>
    </Head>
  )
}

export default SiteHead
