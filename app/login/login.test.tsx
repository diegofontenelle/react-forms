import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import { Login } from "./login"

describe("Login", () => {
  it("renders with email, password and confirm password fields", () => {
    render(<Login />)

    expect(screen.getByText(/email/i)).toBeInTheDocument()
    expect(screen.getByText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByText(/confirm password/i)).toBeInTheDocument()
  })
  it("allows typing on all fields", () => {
    userEvent.setup()
    const email = "diego@gmail.com"
    const password = "password"
    render(<Login />)

    userEvent.type(screen.getByPlaceholderText("your_best@email.com"), email)
    userEvent.type(
      screen.getByPlaceholderText("super secret password"),
      password,
    )
    userEvent.type(
      screen.getByPlaceholderText("confirm super secret password"),
      password,
    )

    waitFor(() => {
      expect(screen.getByDisplayValue(email)).toBeInTheDocument()
      expect(screen.getAllByDisplayValue(password)).toHaveLength(2)
    })
  })
})
