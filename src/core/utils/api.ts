import axios, { AxiosError } from 'axios'

import { IUserResponse } from 'core/models'
import { ACCESS_TOKEN } from 'core/constants'

export const refreshApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

const refreshAccessToken = async () => {
  const { data } = await refreshApi.post<IUserResponse>('/auth/refresh')
  localStorage.setItem(ACCESS_TOKEN, data.accessToken)
}

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN)

  if (!config.headers) {
    config.headers = {}
  }

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (config) => config,
  async (error: AxiosError & { config: { __isRetryRequest: boolean } }) => {
    const { response, config } = error
    if (response) {
      if (response.status === 401 && config && !config.__isRetryRequest) {
        try {
          await refreshAccessToken()
        } catch (e) {
          localStorage.clear()
          return Promise.reject(error)
        }
        config.__isRetryRequest = true
        return api(config)
      }
    }
    return Promise.reject(error)
  }
)
