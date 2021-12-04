import ContactContainer from 'components/shared/ContactContainer'
import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import FadeInContainer from 'layouts/FadeInContainer'
import PageContainer from 'layouts/PageContainer'
import React from 'react'

const SEO = {
  title: 'Wave Landscaping & Design: get in touch!',
  metaDescription:
    'Wave Landscaping & Design provide top landscaping services such as lawn maintenance, landscape design, tree services, and cleanup',
}

const Careers = () => {
  return (
    <FadeInContainer>
      <SiteHead {...SEO} />
      <PageBanner title="Get in touch!" />
      <PageContainer>
        <ContactContainer isBlue={false} />
      </PageContainer>
    </FadeInContainer>
  )
}

export default Careers
