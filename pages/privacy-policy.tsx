import SiteHead from 'components/shared/SiteHead'
import { gql, GraphQLClient } from 'graphql-request'
import FadeInContainer from 'layouts/FadeInContainer'
import PageContainer from 'layouts/PageContainer'
import { GetStaticProps } from 'next'
import React from 'react'
import styles from 'styles/PrivacyPolicy.module.css'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

const SEO = {
  title: 'Wave Landscaping & Design: Privacy Policy',
  metaDescription:
    'Last updated February 25, 2021 Thank you for choosing to be part of our community at Barnwell 6 LLC, doing business as Wave Landscaping & Design ("Wave Landscaping & Design ", "we", "us", "our"). ',
}

interface Props {
  page: {
    title: string
    content: {
      html: string
    }
  }
}
const PrivacyPolicy = ({ page }: Props) => {
  const { title, content } = page

  return (
    <>
      <SiteHead {...SEO} />
      <FadeInContainer>
        <PageContainer>
          <div className={styles.page} dangerouslySetInnerHTML={{ __html: content.html }} />
        </PageContainer>
      </FadeInContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query {
      privacyPolicy(where: { id: "ckwtcpb4w75ps0c733mx4ign9" }) {
        title
        content {
          html
        }
      }
    }
  `

  const data = await client.request(query)

  return {
    props: {
      page: data?.privacyPolicy,
    },
  }
}

export default PrivacyPolicy
