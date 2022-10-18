import {innerComponentProps} from '../../models/innerChartComponentProps'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export const ListHighChartView = ({options}:innerComponentProps) =>
  <div className='d-flex flex-column justify-content-center'
       style={{rowGap:10}}>
    {options.map((option) =>
      <HighchartsReact
        key={option.title.text}
        highcharts={Highcharts}
        options={option}/>
      )}
  </div>
