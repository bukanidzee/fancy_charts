import {DateTime} from 'luxon'

export function getISODate(year:number, month:number, day:number):string {
  return DateTime.local(year, month, day).toISODate()
}

export function millisFromISO(iso:string):number {
  return DateTime.fromISO(iso).toMillis()
}
