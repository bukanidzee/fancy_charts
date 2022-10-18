import {useState} from 'react';
import {DateForm} from '../components/forms';
import {defaultDates} from '../utils/defaultDates'
import {ListHighChart} from '../components/ListHighchart'
import {useAppSelector} from '../hooks/useRedux'

export const ChartsList = () => {
  const [dates, setDates] = useState(defaultDates)
  const charts = useAppSelector(state => state.chartsStore.charts)
  return(
    <>
      <h1>Charts list</h1>
      {charts.length > 0 &&
        <DateForm setDates={setDates}/>}
      <ListHighChart dates={dates}
                     charts={charts}/>
    </>
  )
}
