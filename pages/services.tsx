import ServiceCard from 'components/molecules/ServiceCard'
import ServiceLinks from 'components/organisms/services/ServiceLinks'
import ContactContainer from 'components/shared/ContactContainer'
import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import { gql, GraphQLClient } from 'graphql-request'
import FadeInContainer from 'layouts/FadeInContainer'
import PageContainer from 'layouts/PageContainer'
import { GetStaticProps } from 'next'
import React from 'react'
import { Service } from 'types/Service'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

const SEO = {
  title: 'Wave Landscaping & Design: We offer a variety of landscaping services',
  metaDescription:
    'Wave Landscaping & Design provide top landscaping services such as lawn maintenance, landscape design, tree services, and cleanup',
}

const urlify = (str) => str.toLowerCase().replace(/\s/g, '-')

const Services = ({ services }) => {
  const serviceLinks = services.map(({ title }, index) => ({
    id: index,
    label: title,
    slug: '#' + urlify(title),
  }))

  const pageServices = services.map((service) => ({
    ...service,
    id: urlify(service.title),
  }))

  return (
    <>
      <FadeInContainer>
        <SiteHead {...SEO} />
        <PageBanner title="Services" />
        <ServiceLinks links={serviceLinks} />
        <PageContainer>
          {pageServices.map((service, index) => (
            <ServiceCard index={index} service={service} key={service.title} />
          ))}
        </PageContainer>
      </FadeInContainer>
      <ContactContainer isBlue={true} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query {
      services {
        title
        description
        displayImage {
          fileName
          url
          id
        }
      }
    }
  `

  const data: { services: Service[] | null } = await client.request(query)

  return {
    props: {
      services: data?.services,
    },
  }
}
export default Services
