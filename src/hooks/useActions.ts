import {Dispatch, SetStateAction} from 'react'
import {useAppDispatch} from './useRedux'
import {addChart, changeChart, deleteChart} from '../store/chartSlice'
import {TChart} from '../models/TChart'
import {TModal} from '../models/TModal'

export const useActions = (modal:TModal,
                           setModal:Dispatch<SetStateAction<TModal>>,
                           form: TChart) => {
  const dispatch = useAppDispatch()
  const handleSubmit = () => {

    if (modal.action === 'change'){
      const index = modal.index
      dispatch(changeChart({index, form}))
    } else if (modal.action === 'delete'){
      dispatch(deleteChart(modal.index))
    } else {
      dispatch(addChart(form))
    }
    handleClose()
  }

  const handleClose = () => {
    setModal({...modal, show:false, index:-1})
  }

  const handleChartChange = (i: number) => {
    setModal({show: true, action:'change', index:i})
  }

  const handleChartDelete = (i: number) => {
    setModal({show: true, action:'delete', index:i})
  }

  const handleChartCreate = () => {
    setModal({show:true, action:'create', index:-1})
  }

  return {handleSubmit,
          handleClose,
          handleChartChange,
          handleChartDelete,
          handleChartCreate}
}

// index: number,
// setIndex: Dispatch<SetStateAction<number>>
