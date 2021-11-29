import React from 'react'

interface Props {
  title: string
}

const SectionTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="w-full">
      <p className="text-5xl text-center font-extrabold font-serif">{title}</p>
    </div>
  )
}

export default SectionTitle
