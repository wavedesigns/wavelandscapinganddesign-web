import React from 'react'

interface Props {
  id: string
  label: string
  type: string
  name: string
}

const InputText = ({ id, label, type, name }: Props) => {
  return (
    <>
      <label htmlFor={id} className="block text-lg font-medium">
        {label}
        {type !== 'textarea' ? (
          <input
            type={type}
            name={name}
            id={id}
            aria-label={id}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border p-3 border-gray-300 rounded text-lg text-black"
          />
        ) : (
          <textarea
            name={name}
            id={id}
            aria-label={id}
            style={{ minHeight: '200px' }}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border p-3 border-gray-300 rounded text-lg text-black"
          />
        )}
      </label>
    </>
  )
}

export default InputText
