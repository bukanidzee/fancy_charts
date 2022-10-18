import {ColorString} from 'highcharts'
import {TFormattedData} from './TFormattedData'

export type TOptionsSerie = {
  name:string
  color?: ColorString
  type: string
  data: TFormattedData[]
}

export type TOptions = {
  title: {
    text:string
  }

  xAxis: {
    type:'datetime'
    tickInterval: number
    tickPixelInterval: null
  }

  tooltip: {
    headerFormat: string
    pointFormat: string
  }

  plotOptions: {
    series: {
      pointInterval: number
    }
  }
  series: TOptionsSerie[]
}
