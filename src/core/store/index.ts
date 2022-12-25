import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userSlice from './user/user.slice'

const rootReducer = combineReducers({
  user: userSlice,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']
