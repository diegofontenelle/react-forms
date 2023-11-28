export type User = {
  email: string
  password: string
  confirmPassword: string
}

export type RequestError = {
  status: 500 | 400
  message: string
}

export type ResponseOk = {
  status: 200
  data: unknown
}

export type UserApiResponse = RequestError | ResponseOk

export function isUserResponseOk(
  response: UserApiResponse,
): response is ResponseOk {
  return response.status === 200
}
