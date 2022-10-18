import {Modal, Button} from 'react-bootstrap'
import {ReactNode} from 'react'
import {TModal} from '../models/TModal'


interface ModalProps {
  modal: TModal
  handleClose: () => void
  handleSubmit: (index?:number) => void
  children: ReactNode
}

export const CustomModal = ({modal,
                             handleClose,
                             handleSubmit,
                             children}:ModalProps) => {

  return(
    <Modal show={modal.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modal.action === 'create' ?
                          'Создание графика'
                        : modal.action === 'change' ?
                          'Редактирование графика'
                        : 'Удаление графика'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Отменить
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            {modal.action === 'delete' ? 'Удалить' : 'Сохранить'}
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
