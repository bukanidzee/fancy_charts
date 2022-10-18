import {TChart} from '../models/TChart';
import {Dispatch, SetStateAction} from 'react'
import {setField} from '../utils/setField'
import {TIndexes, TArrayValues} from '../models/TForm'
import cloneDeep from 'lodash/cloneDeep'


export const useFormField = (form:TChart, setForm:Dispatch<SetStateAction<TChart>>) => {
  const changeField = (indexes:TIndexes, value:string|number) => {
    const passForm = cloneDeep(form)
    setField(passForm, setForm, indexes, value)
  }

  const addField = (indexes:TIndexes, array:TArrayValues[], value:TArrayValues) => {
    const passForm = cloneDeep(form)
    const passArray = cloneDeep(array)
    passArray.push(value)
    setField(passForm, setForm, indexes, passArray)
  }

  const deleteField = (indexes:TIndexes, array:TArrayValues[], index:number) => {
    const passForm = cloneDeep(form)
    const passArray = cloneDeep(array)
    passArray.splice(index, 1)
    setField(passForm, setForm, indexes, passArray)
  }

  return {changeField, addField, deleteField}
}
