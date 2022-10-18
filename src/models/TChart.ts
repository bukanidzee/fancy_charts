// import {DateTime} from 'luxon'
import {ColorString} from 'highcharts'

export type TStoredData = {
  value: number
  date: string
}

// export type TData = TStoredData | number | null

export type TSingleLine ={
  name: string
  data: TStoredData[]
  type: string
  color?: ColorString
}

export type TChart = {
  text: string
  lines: TSingleLine[]
}
