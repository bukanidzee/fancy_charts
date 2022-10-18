import {innerComponentProps} from '../../models/innerChartComponentProps'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {CloseButton, Button} from 'react-bootstrap';

export const ListHighChartChange = ({options,
                                     handleChartChange,
                                     handleChartDelete}:Required<innerComponentProps>) => {
  return(
    <div className='d-flex flex-column align-items-center w-100'
         style={{rowGap:10}}>
      {options.map((option, index) =>
        <div className='chart-change-box'
             key={option.title.text}>
          <HighchartsReact
            highcharts={Highcharts}
            options={option}/>
          <CloseButton onClick={() => handleChartDelete(index)}
                       style={{position:'absolute',
                               top:5,
                               right:5}}/>
          <Button onClick={() => handleChartChange(index)}>Изменить</Button>
        </div>
        )}
    </div>
  )
}
