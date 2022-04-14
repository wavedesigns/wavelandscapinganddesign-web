/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import FadeInContainer from 'layouts/FadeInContainer'
import PageContainer from 'layouts/PageContainer'
import React from 'react'
import Mailchimp from 'react-mailchimp-form'

const SEO = {
  title: 'Wave Landscaping & Design: Mailing List',
  metaDescription:
    'Join our mailing list to receive updates about upcoming events, new products, and more.',
}

const Mailinglist = () => {
  return (
    <>
      <SiteHead {...SEO} />

      <FadeInContainer>
        <PageBanner title="Subscribe!" />
        <PageContainer>
          <Mailchimp
            action="https://wavelandscapinganddesign.us14.list-manage.com/subscribe/post?u=69033040d6f936a0ae54f507c&amp;id=1f0f8a0307"
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Enter your email address',
                type: 'email',
                required: true,
              },
              {
                name: 'FNAME',
                placeholder: 'Enter your full name',
                type: 'type',
                required: true,
              },
            ]}
            messages={{
              sending: 'Sending...',
              success: 'Thank you for subscribing!',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write in your email e-mail.',
              duplicate: 'Too many subscribe attempts for this email address',
              button: 'Subscribe!',
            }}
            className="mailinglist-form"
          />
        </PageContainer>
      </FadeInContainer>
    </>
  )
}

export default Mailinglist
