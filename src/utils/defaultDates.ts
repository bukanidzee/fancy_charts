import {getISODate} from './ISODate'
import {TDates} from '../models/TDates'

export const defaultDates:TDates = {
  begin: getISODate(2000,1,1),
  end: getISODate(2022,10,16)
}
