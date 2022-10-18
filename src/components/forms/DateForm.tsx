import {useState, FormEvent, Dispatch, SetStateAction} from 'react';
import {Form, Button, } from 'react-bootstrap'
import {TDates} from '../../models/TDates'
import {millisFromISO} from '../../utils/ISODate';
import {defaultDates} from '../../utils/defaultDates'
import ErrorBlock from '../ErrorBlock'

interface DateFormProps {
  setDates: Dispatch<SetStateAction<TDates>>
}

export const DateForm = ({setDates}: DateFormProps) => {

  const [formDates, setFormDates] = useState(defaultDates)
  const [error, setError] = useState('')

  const setField = (field: keyof TDates, value:string) => {
    setFormDates({...formDates, [field]: value})
    if (error) {
      setError('')
    }
  }

  const datesSubmit = (event: FormEvent) => {
    event.preventDefault()
    const begin = millisFromISO(formDates.begin)
    const end = millisFromISO(formDates.end)
    if (begin > end) {
      setError('Начало промежутка не может быть позже конца')
      return
    }
    setDates(formDates)
  }

  return(
    <>
      <Form className='d-flex flex-row'
            style={{columnGap:10}}
            onSubmit={datesSubmit}>
        <Form.Group className="d-flex flex-row align-items-center"
                    style={{columnGap:10}}>
          <Form.Label>Начало:</Form.Label>
          <Form.Control type='date'
                        value={formDates.begin}
                        onChange={(e) => setField('begin', e.target.value)}/>
          <Form.Control.Feedback type='invalid'>
            {error}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="d-flex flex-row align-items-center"
                    style={{columnGap:10}}>
          <Form.Label>Конец:</Form.Label>
          <Form.Control type='date'
                        value={formDates.end}
                        onChange={(e) => setField('end', e.target.value)}/>
        </Form.Group>
        <Button type='submit'>Найти</Button>
      </Form>
      <ErrorBlock error={error}/>
    </>
  )
}
