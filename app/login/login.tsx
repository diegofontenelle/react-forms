"use client"
import { FormEvent } from "react"
import { FormField } from "./FormField"
import { User } from "./types"
import { createUserApi } from "./api"

const FORM_FIELDS = [
  {
    name: "email",
    label: "Email",
    placeholder: "you_best@email.com",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "super secret password",
  },
  {
    name: "confirm-password",
    label: "Confirm password",
    placeholder: "confirm super secret password",
  },
]

export function Login() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const user = Object.fromEntries(formData) as User

    console.log(user, formData)

    createUserApi(user)
  }

  return (
    <div className="max-w-s w-full">
      <form className="mb-4 bg-zinc-100" onSubmit={onSubmit}>
        {FORM_FIELDS.map((field) => (
          <FormField key={field.name} {...field} />
        ))}
        <button
          className="w-full rounded-md bg-zinc-700 px-4 py-4 text-white shadow-zinc-100"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
