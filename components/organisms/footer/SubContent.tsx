import React from 'react'

const date = new Date()
const year = date.getFullYear()

const SubContent = () => (
  <div className="max-w-screen-xl mx-auto py-4 border-t border-gray-900 mt-4">
    <p className="font-serif text-lg">
      Copyright ©️ {year}. Content, including images, displayed on this website is protected by
      copyright laws. Downloading, republication, retransmission or reproduction of content on this
      website is strictly prohibited.
    </p>
  </div>
)

export default SubContent
