import {useState, useEffect} from 'react';
import {ListHighChart} from '../components/ListHighchart'
import {useAppSelector} from '../hooks/useRedux'
import {useActions} from '../hooks/useActions';
import {Button} from 'react-bootstrap'
import {CustomModal} from '../components/CustomModal'
import {initialChart} from '../utils/initialChart';
import {TModal} from '../models/TModal'
import {ChartForm, DeleteChartForm} from '../components/forms'

export const ChartsSettings = () => {
  const charts = useAppSelector(state => state.chartsStore.charts)
  const [modal, setModal] = useState({show: false,
                                      action: 'create',
                                      index: -1} as TModal)
  const [form, setForm] = useState(initialChart)

  console.log(form);


  useEffect(() => {
    // console.log(charts);

    if (modal.index >= 0){
      setForm(charts[modal.index])
    } else {
      setForm(initialChart)
    }
  }, [modal, charts])

  const {handleSubmit,
         handleClose,
         handleChartChange,
         handleChartDelete,
         handleChartCreate} = useActions(modal,
                                         setModal,
                                         form)

  return(
    <>
      <h1>Charts Settings</h1>
      <Button onClick={handleChartCreate}
              style={{position:'absolute',
                      top:5,
                      right:5}}>Создать</Button>
      <CustomModal  modal={modal}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}>
        {['create', 'change'].includes(modal.action) ?
          <ChartForm form={form} setForm={setForm}/>
        : <DeleteChartForm/>}
      </CustomModal>
      <ListHighChart charts={charts}
                     handleChartChange={handleChartChange}
                     handleChartDelete={handleChartDelete}/>
    </>
  )
}
