import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Login } from "./login"

describe("Login", () => {
  it("renders with email, password and confirm password fields", () => {
    render(<Login />)

    expect(screen.getByText(/email/i)).toBeInTheDocument()
    expect(screen.getByText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByText(/confirm password/i)).toBeInTheDocument()
  })
})
