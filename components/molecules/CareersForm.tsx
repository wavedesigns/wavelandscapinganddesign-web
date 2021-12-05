import Button from 'components/atoms/Button'
import InputText from 'components/atoms/InputText'
import React from 'react'

const CareersForm = () => {
  return (
    <div className="space-y-6 sm:space-y-5 mt-8 lg:mt-0 sm:mx-auto sm:max-w-xl sm:mt-12">
      <form className="space-y-6 sm:space-y-5">
        <InputText id="career-full-name" label="Full Name" type="text" />
        <InputText id="career-email" label="Email" type="email" />
        <InputText id="career-phone" label="Phone" type="text" />
        <InputText id="career-resume" label="Resume" type="textarea" />
        <Button label="Send" />
      </form>
    </div>
  )
}

export default CareersForm
