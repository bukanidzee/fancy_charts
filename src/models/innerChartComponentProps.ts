import {TOptions} from './TOptions'

export type innerComponentProps = {
  options: TOptions[]
  handleChartChange?: (index:number) => void
  handleChartDelete?: (index:number) => void
}
