import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { invoiceApi } from 'core/services'
import userSlice from './user/user.slice'

const rootReducer = combineReducers({
  user: userSlice,
  [invoiceApi.reducerPath]: invoiceApi.reducer,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([invoiceApi.middleware]),
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']
