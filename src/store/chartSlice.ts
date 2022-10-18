import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {TChart} from '../models/TChart'

// Define a type for the slice state
interface ChartsState {
  charts: TChart[]
}

// Define the initial state using that type
const initialState: ChartsState = {
  charts: []
}

interface ChangeActionState {
  index: number,
  form: TChart
}

export const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    addChart: (state, action: PayloadAction<TChart>) => {
      const chart = action.payload
      state.charts = [...state.charts, chart]
    },
    listCharts: (state, action: PayloadAction<TChart[]>) => {
      state.charts = action.payload
    },
    deleteChart: (state, action: PayloadAction<number>) => {
      const index: number = action.payload
      state.charts.splice(index, 1)
    },
    changeChart: (state, action: PayloadAction<ChangeActionState>) => {
      const {index, form} = action.payload
      state.charts[index] = form
    }
  },
})

// Action creators are generated for each case reducer function
export const { addChart, listCharts, deleteChart, changeChart } = chartSlice.actions

export default chartSlice.reducer
