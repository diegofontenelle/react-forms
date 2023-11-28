import { HTMLInputTypeAttribute } from "react"

type Props = {
  label: string
  name: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
}

export function FormField({
  label,
  name,
  placeholder = "",
  type = "text",
}: Props) {
  return (
    <div className="mb-8 mt-8">
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="text-md focus:shadow-outline w-full appearance-none rounded-md border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}
