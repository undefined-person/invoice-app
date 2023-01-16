import axios, { AxiosError } from 'axios'

import { ACCESS_TOKEN } from 'core/constants'
import { IUserResponse } from 'core/models'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

const refreshApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

const refreshAccessToken = async () => {
  const { data } = await refreshApi.post<IUserResponse>('/auth/refresh')
  localStorage.setItem(ACCESS_TOKEN, data.accessToken)
}

api.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {}
  }

  config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
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
          return Promise.reject(error)
        }
        config.__isRetryRequest = true
        return api(config)
      }
    }
    return Promise.reject(error)
  }
)
