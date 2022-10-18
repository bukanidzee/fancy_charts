import {TChart} from '../../../models/TChart'
import {TIndexes, TArrayValues} from '../../../models/TForm'
import {Dispatch, SetStateAction, createContext} from 'react'
import {Form} from 'react-bootstrap';
import {useFormField} from '../../../hooks/useFormField'
import {ObjectForm} from './ObjectForm';

interface ChartFormProps {
  form: TChart
  setForm: Dispatch<SetStateAction<TChart>>
}

type ContextActions = {
  addField: (indexes: TIndexes, array: TArrayValues[], value: TArrayValues) => void
  changeField: (indexes: TIndexes, value: number|string) => void
  deleteField: (indexes: TIndexes, array: TArrayValues[], index: number) => void
}

export const FieldActionsContext = createContext({} as ContextActions)

export const ChartForm = ({form,
                           setForm}:ChartFormProps) => {

  const {addField, changeField, deleteField} = useFormField(form, setForm)

  return(
    <FieldActionsContext.Provider value={{addField, changeField, deleteField}}>
      <Form className='change-create-form'>
        <ObjectForm obj={form} indexes={[]}/>
      </Form>
    </FieldActionsContext.Provider>
  )
}
