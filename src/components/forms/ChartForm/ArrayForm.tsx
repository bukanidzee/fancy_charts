import {FormProps} from './ObjectForm';
import {TSingleLine, TStoredData} from '../../../models/TChart'
import {ObjectForm} from './ObjectForm'
import {useContext} from 'react'
import {FieldActionsContext} from './index'
import {Button, CloseButton, Accordion} from 'react-bootstrap'
import {initialData, initialLine} from '../../../utils/initialChart'
import cn from 'classnames'

interface ArrayFormProps extends Omit<FormProps, 'obj'>{
  arr: (TSingleLine|TStoredData)[]
}

export const ArrayForm = ({arr, indexes}:ArrayFormProps) => {
  const {addField, deleteField} = useContext(FieldActionsContext)
  const prevKey = indexes[indexes.length-1]
  const addEvent = () => addField(indexes,
                                  arr,
                                  prevKey === 'lines' ?
                                    initialLine
                                  : initialData)

  return(
    <Accordion flush style={{marginTop:10,
                             marginBottom:10}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{prevKey === 'lines' ?
                            'Линии'
                          : 'Точки'}</Accordion.Header>
        <Accordion.Body>
          {arr.map((obj, index) =>
            <div style={{marginLeft:indexes.length*5,
                         position:'relative'}}
                 key={[...indexes, index].join('_')}
                 className={cn({'d-flex flex-row': prevKey === 'data'})}>
              <ObjectForm obj={obj} indexes={[...indexes, index]}/>
              <CloseButton onClick={() => deleteField(indexes, arr, index)}
                           style={{position:'absolute',
                                   top:5,
                                   right:5}}/>
            </div>
          )}
          <div className='d-flex justify-content-end'>
            <Button style = {{marginTop:5,
                              marginBottom:5}}
                    onClick={addEvent}>{prevKey==='data'?
                                          'Добавить точку'
                                        : 'Добавить линию'}</Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
