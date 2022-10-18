import {TChart, TStoredData, TSingleLine} from '../models/TChart';
import {TDates} from '../models/TDates'
import {TOptions, TOptionsSerie} from '../models/TOptions'
import {TFormattedData} from '../models/TFormattedData';
import { millisFromISO } from './ISODate';


const filterAndFormatData = (storedData:TStoredData[], dates?:TDates):TFormattedData[] => {

  const data:TFormattedData[] = storedData.map(point => {
    return [millisFromISO(point.date), point.value]
  })

  if (dates) {
    const start = millisFromISO(dates.begin)
    const end = millisFromISO(dates.end)

    return data.filter(point => {
      return point[0] > start && point[0] < end
    })
  } else {
    return data
  }

}

const getFormatedSeries = (dataChunkLines:TSingleLine[], dates?:TDates):TOptionsSerie[] => {
  const series:TOptionsSerie[] = []
  for (let line of dataChunkLines) {
    const serie:TOptionsSerie = {
      name: line.name,
      type: line.type,
      data: filterAndFormatData(line.data, dates)
    }
    if (line.color) {
      serie.color = line.color
    }
    series.push(serie)
  }
  return series

}

export const getOptions = (storedData:TChart[], dates?:TDates):TOptions[] => {
  const options: TOptions[] = []

  for (let dataChunk of storedData) {
    const option: TOptions = {
      title: {
        text: dataChunk.text
      },
      xAxis: {
        type: 'datetime',
        tickInterval: 1000*3600*24,
        tickPixelInterval: null,
        // dateTimeLabelFormats: {
        //   day: '%e',
        //   month: '%B',
        //   year: '%Y'
        // }
      },
      tooltip: {
        headerFormat: '<b>{series.name}: {point.y}</b><br>',
        pointFormat: `{point.x:%Y-%m-%d}`
      },
      plotOptions: {
        series: {
          pointInterval: 1000*3600*24,
        }
      },
      series: getFormatedSeries(dataChunk.lines, dates)
    }
    options.push(option)
  }

  return options
}
