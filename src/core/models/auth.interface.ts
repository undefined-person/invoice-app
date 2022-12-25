import { User } from './user.interface'

export interface IUserResponse {
  user: User
  accessToken: string
}

export interface ILoginPayload {
  email: string
  password: string
}

export interface IRegistrationPayload {
  email: string
  password: string
  username: string
}
