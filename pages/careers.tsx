import SectionTitle from 'components/atoms/SectionTitle'
import CareersForm from 'components/molecules/CareersForm'
import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import FadeInContainer from 'layouts/FadeInContainer'
import PageContainer from 'layouts/PageContainer'
import dynamic from 'next/dynamic'
import React from 'react'

const ContactContainer = dynamic(() => import('components/shared/ContactContainer'))

const SEO = {
  title: 'Wave Landscaping & Design: We offer a variety of landscaping services',
  metaDescription:
    'Wave Landscaping & Design provide top landscaping services such as lawn maintenance, landscape design, tree services, and cleanup',
}

const SUB_TITLE =
  'Interested in a career with Wave Landscaping & Design? We are always looking for crew members and crew leaders. Please fill out the form below and we will be in touch!'

const Careers = () => {
  return (
    <>
      <SiteHead {...SEO} />
      <FadeInContainer>
        <PageBanner title="Careers" />
        <PageContainer>
          <div className="mx-4 sm:mx-0">
            <SectionTitle title={SUB_TITLE} />
            <CareersForm />
          </div>
        </PageContainer>
      </FadeInContainer>
      <ContactContainer isBlue={true} />
    </>
  )
}

export default Careers
