import {Route, Routes} from 'react-router-dom';
import {ChartsList, ChartsSettings} from './pages'
import {Navigation} from './components/Navigation';
import {useEffect, useMemo} from 'react'
import {getData} from './utils/getData';
import {listCharts} from './store/chartSlice';
import {AppDispatch} from './store/store';
import {useDispatch} from 'react-redux';
// import {Container, Row, Col} from 'react-bootstrap';

const App = () => {
  const dispatch:AppDispatch = useDispatch()


  const data = useMemo(() => {
    return getData(4, 4, 10)
  }, [])

  useEffect(() => {
    dispatch(listCharts(data))
  }, [data])

  return(
    <>
      <div id='modal'/>
      <Navigation />
      <div id='content'>
        <div>
          <Routes>
            <Route path='/' element=<ChartsList /> />
            <Route path='/settings' element=<ChartsSettings /> />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
