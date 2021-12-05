import React from 'react'

interface Props {
  title: string
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="w-full px-4">
      <p className="text-4xl text-center font-extrabold font-serif">{title}</p>
    </div>
  )
}

export default SectionTitle
