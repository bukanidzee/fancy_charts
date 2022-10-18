import {configureStore} from "@reduxjs/toolkit";
import chartReducer from './chartSlice'

export const store = configureStore({
  reducer: {
    chartsStore: chartReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
