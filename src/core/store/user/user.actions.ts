import { createAsyncThunk } from '@reduxjs/toolkit'

import { IRegistrationPayload, IUserResponse, ILoginPayload } from 'core/models'
import { ACCESS_TOKEN } from 'core/constants'
import { api } from 'core/utils'

export const registration = createAsyncThunk('auth/signup', async (payload: IRegistrationPayload, thunkAPI) => {
  try {
    const { data } = await api.post<IUserResponse>('/auth/signup', payload)
    window.location.replace('/')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const login = createAsyncThunk('/auth/signin', async (payload: ILoginPayload, thunkAPI) => {
  try {
    const { data } = await api.post<IUserResponse>('/auth/signin', payload)

    localStorage.setItem(ACCESS_TOKEN, data.accessToken)
    window.location.replace('/')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const checkAuth = createAsyncThunk('/auth/refresh', async (_, thunkAPI) => {
  try {
    const { data } = await api.post<IUserResponse>('/auth/refresh')

    localStorage.setItem(ACCESS_TOKEN, data.accessToken)

    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const logout = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await api.post<IUserResponse>('/auth/logout')

    localStorage.removeItem(ACCESS_TOKEN)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
