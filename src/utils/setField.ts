import {Dispatch, SetStateAction} from 'react'
import {TIndexes} from '../models/TForm'

export const setField = <T, V>(obj:T,
                               setObj:Dispatch<SetStateAction<T>>,
                               indexes:TIndexes,
                               value:V):void => {

  let result = {} as T
  function findField <O>(obj: O, ind:TIndexes): O{
    const curInd = ind.shift() as keyof typeof obj
    if (ind.length > 0) {
      if (Array.isArray(obj) && typeof curInd === 'number') {
        return [...obj.slice(0, curInd),
                findField(obj[curInd], ind),
                ...obj.slice(curInd+1)] as O
      } else{
        return {...obj, [curInd]: findField(obj[curInd], ind)} as O
        }
    } else {
      return {...obj, [curInd]: value}
    }
  }
  result = findField(obj, indexes)

  setObj(result)
}
