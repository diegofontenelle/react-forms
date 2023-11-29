import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import { Login } from "./login"
import * as api from "./api"

jest.mock("./api", () => ({
  ...jest.requireActual("./api"),
  createUserApi: jest.fn((e) => e),
}))

const email = "diego@gmail.com"
const password = "password"

describe("Login", () => {
  it("renders with email, password and confirm password fields", () => {
    render(<Login />)

    expect(screen.getByText(/email/i)).toBeInTheDocument()
    expect(screen.getByText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByText(/confirm password/i)).toBeInTheDocument()
  })
  it("submits, with correct values", async () => {
    userEvent.setup()
    const spy = jest.spyOn(api, "createUserApi")
    render(<Login />)

    await userEvent.type(screen.getByTestId("email"), email)
    await userEvent.type(screen.getByTestId("password"), password)
    await userEvent.type(screen.getByTestId("confirm-password"), password)

    await userEvent.click(screen.getByText(/submit/i))

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith({
      email,
      password,
      "confirm-password": password,
    })
  })
})
