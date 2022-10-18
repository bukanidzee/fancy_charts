export type TAction = 'create' | 'change' | 'delete'

export type TModal = {
  show:boolean,
  action: TAction,
  index: number
}
