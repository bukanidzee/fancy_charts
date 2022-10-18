import {TChart, TSingleLine, TStoredData} from '../models/TChart'
import {DateTime} from 'luxon'

export const initialData:TStoredData = {
  value: 0,
  date: DateTime.local(2003, 1, 1).toISODate()
}

export const initialLine:TSingleLine = {
  name: '',
  type: 'line',
  color: '#456794',
  data: [{
    value: 0,
    date: DateTime.local(2003, 1, 1).toISODate()
  }]
}

export const initialChart:TChart ={
  text: '',
  lines: [{
    name: '',
    type: 'line',
    color: '#456794',
    data: [{
      value: 0,
      date: DateTime.local(2003, 1, 1).toISODate()
    }]
  }]
}
