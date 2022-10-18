import {Form} from 'react-bootstrap';
import {TChart, TSingleLine, TStoredData} from '../../../models/TChart';
import {TIndexes} from '../../../models/TForm'
import {ArrayForm} from './ArrayForm';
import {formFields} from '../../../utils/formFields';
import {chartTypes} from '../../../utils/chartTypes';
import {useContext} from 'react'
import {FieldActionsContext} from './index'

export interface FormProps {
  obj: TChart | TSingleLine | TStoredData
  indexes: TIndexes
}

export const ObjectForm = ({obj, indexes}:FormProps) => {
  const {changeField} = useContext(FieldActionsContext)

  return(
    <>
      {Object.keys(obj).map((key) => {
        const value = obj[key as keyof typeof obj]
        if (Array.isArray(value)) {
          return (
            <ArrayForm key={[...indexes, key].join('_')}
                       arr={value}
                       indexes={[...indexes, key]}/>
          )
        } else {
          const field = formFields[key as keyof typeof formFields]
          return (
            <Form.Group style={{marginLeft: indexes.length*5}}
                        key={[...indexes, key].join('_')}>
              <Form.Label>{field.name}:</Form.Label>
              {field.type === 'select' ?
                <Form.Select value={value}
                             onChange={(e) =>
                               changeField([...indexes, key], e.target.value)}>
                  {chartTypes.map(chart =>
                    <option key={[...indexes, key, chart].join('_')}
                            value={chart}>
                      {chart}
                    </option>)}
                </Form.Select>
              :
              <Form.Control type={field.type}
                            value={value}
                            onChange={(e) =>
                              changeField(
                                [...indexes, key],
                                field.type === 'number' ?
                                  parseFloat(e.target.value)
                                : e.target.value)}/>}
            </Form.Group>
          )
        }
      })}
    </>
  )
}
