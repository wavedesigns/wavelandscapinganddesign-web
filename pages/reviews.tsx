import ReviewBlock from 'components/molecules/ReviewBlock'
import ContactContainer from 'components/shared/ContactContainer'
import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import { gql, GraphQLClient } from 'graphql-request'
import FadeInContainer from 'layouts/FadeInContainer'
import PageContainer from 'layouts/PageContainer'
import { GetStaticProps } from 'next'
import React from 'react'
import { Review } from 'types/Review'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

const SEO = {
  title: 'Wave Landscaping & Design: We offer a variety of landscaping services',
  metaDescription:
    'Wave Landscaping & Design provide top landscaping services such as lawn maintenance, landscape design, tree services, and cleanup',
}

interface Props {
  reviews: Review[]
}
const Reviews = ({ reviews }: Props) => {
  return (
    <>
      <FadeInContainer>
        <SiteHead {...SEO} />
        <PageBanner title="Reviews" />
        <PageContainer>
          {reviews.map((review) => (
            <ReviewBlock {...review} key={review.name} />
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
      reviews {
        name
        quote
      }
    }
  `

  const data: { reviews: Review[] | null } = await client.request(query)

  return {
    props: {
      reviews: data?.reviews,
    },
  }
}
export default Reviews
