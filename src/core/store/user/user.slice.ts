import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ACCESS_TOKEN } from 'core/constants'
import { User, IUserResponse } from 'core/models'

import { checkAuth, login, logout, registration } from './user.actions'

const accessToken = localStorage.getItem(ACCESS_TOKEN) ?? null

interface UserState {
  user: User | null
  loading: boolean
  error: string | null
  accessToken: string | null
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  accessToken,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.pending, (state) => {
      state.loading = true
    })
    builder.addCase(registration.fulfilled, (state, action: PayloadAction<IUserResponse>) => {
      state.loading = false
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    })
    builder.addCase(registration.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string
    })
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action: PayloadAction<IUserResponse>) => {
      state.loading = false
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string
    })
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true
    })
    builder.addCase(checkAuth.fulfilled, (state, action: PayloadAction<IUserResponse>) => {
      state.loading = false
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    })
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string
    })
    builder.addCase(logout.pending, (state) => {
      state.loading = true
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false
      state.user = null
    })
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string
    })
  },
})

export default userSlice.reducer
