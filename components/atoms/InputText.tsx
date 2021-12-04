import React from 'react'

interface Props {
  id: string
  label: string
  type: string
}

const InputText = ({ id, label, type }: Props) => {
  return (
    <>
      <label htmlFor={id} className="block text-lg font-medium text-gray-700">
        {label}
        <input
          type={type}
          name={id}
          id={id}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border p-3 border-gray-300 rounded text-lg"
        />
      </label>
    </>
  )
}

export default InputText
