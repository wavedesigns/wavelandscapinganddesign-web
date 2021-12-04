import React from 'react'

interface Props {
  label: string
  handlePress?: () => void
}
const Button = ({ label, handlePress }: Props) => (
  <button
    onClick={handlePress || undefined}
    className="bg-skyBlue text-white text-center py-4 px-12 text-xl"
  >
    {label}
  </button>
)

export default Button
