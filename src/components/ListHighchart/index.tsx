import {TDates} from '../../models/TDates';
import {TOptions} from '../../models/TOptions';
import {TChart} from '../../models/TChart'
// import {useAppSelector} from '../../hooks/useRedux'
// import {RootState} from '../../store/store'
import {useEffect, useState} from 'react'
import {getOptions} from '../../utils/getOptions'
import {ListHighChartView} from './ListHighChartView'
import {ListHighChartChange} from './ListHighChartChange'


interface ListHighChartProps {
  dates?: TDates
  charts: TChart[]
  handleChartChange?: (index:number) => void
  handleChartDelete?: (index:number) => void
}

export const ListHighChart= ({dates,
                              charts,
                              handleChartChange,
                              handleChartDelete}: ListHighChartProps) => {

  // const charts = useAppSelector(state => state.chartsStore.charts)
  const [options, setOptions] = useState([] as TOptions[])
  useEffect(() => {
    setOptions(getOptions(charts, dates))
  }, [charts, dates])

  return (
    <>
      {handleChartChange && handleChartDelete ?
        <ListHighChartChange options={options}
                             handleChartChange={handleChartChange}
                             handleChartDelete={handleChartDelete}/>
      :
        <ListHighChartView options={options}/>}
    </>
  )

}
