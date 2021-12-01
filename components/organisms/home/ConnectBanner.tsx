import ButtonWithLabel from 'components/molecules/ButtonWithLabel'
import SocialMedia from 'components/molecules/SocialMedia'

const ConnectBanner = () => (
  <div className="my-16 sm:my-40">
    <ButtonWithLabel
      title="Let's make your designs a reality, together"
      slug="/contact"
      label="Connect Now"
      width="320px"
    />
    <br />
    <SocialMedia position="justify-center" radix={64} />
  </div>
)

export default ConnectBanner
