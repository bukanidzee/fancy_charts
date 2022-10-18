import {TChart, TStoredData} from '../models/TChart';
import {Unique} from './unique';
import {millisFromISO} from './ISODate'
// import { generateRandomString, CharacterSetType, Capitalisation } from "ts-randomstring/lib"

export const getData = (n:number, lines:number, arrayLength:number):TChart[] => {
    const arr:TChart[] = []

    for (let i=0; i<n; i++){
      const unique = new Unique()
      arr[i] = {
        text: unique.getUnique('text', 12) as string,
        lines: []
      }
      for (let j=0; j<lines; j++){
        arr[i].lines[j] ={
          name: unique.getUnique('text', 8) as string,
          type: 'line',
          color: unique.getUnique('color') as string,
          data: [],
        }
        for (let f=0; f<arrayLength; f++) {
          let dataChunk:TStoredData = {
            value: Math.floor(Math.random() * 100),
            date: unique.getUnique('date') as string
          }
          arr[i].lines[j].data.push(dataChunk)
        }
        arr[i].lines[j].data.sort((a, b):number => {
          return millisFromISO(a.date) - millisFromISO(b.date)
        })
      }
    }
    return arr;
}

// randomstring.generate(options),
// const options = {
//   length: 32,
//   charSetType: CharacterSetType.Alphanumeric,
//   capitalisation: Capitalisation.Uppercase
// }
