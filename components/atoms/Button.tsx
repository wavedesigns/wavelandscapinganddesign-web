import React from 'react'

interface Props {
  label: string
  handlePress?: () => void
}
const Button = ({ label, handlePress }: Props) => (
  <button
    type="submit"
    onClick={handlePress || undefined}
    className="bg-skyBlue text-darkBlue-900 text-center py-4 px-12 text-xl"
  >
    {label}
  </button>
)

export default Button
