import React from 'react'

interface Props {
  name: string
  quote: string
}
const ReviewBlock = ({ name, quote }: Props) => (
  <figure className="w-full mt-16 mb-12">
    <blockquote className="text-xl font-serif tracking-wide">{quote}</blockquote>
    <figcaption className="mt-4 font-serif text-base text-gray-600">- {name}</figcaption>
  </figure>
)

export default ReviewBlock
