import { User, UserApiResponse } from "./types"

export function validateFormData(user: User): boolean {
  if (user?.email.split("@").length < 2) {
    return false
  }
  if (user?.password !== user?.confirmPassword) {
    return false
  }

  return true
}

export const createUserApi = async (user: User): Promise<UserApiResponse> => {
  if (validateFormData(user)) {
    console.log(user)
    const response: UserApiResponse = await new Promise((resolve) => {
      console.log(resolve)
      setTimeout(() => {
        return {
          status: 200,
          data: { email: user.email },
        }
      }, 1000)

      return response
    })
  }

  return { status: 400, message: "Bad request" }
}
