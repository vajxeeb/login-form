
import React from 'react'
import './App'
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap'
import { IoMdAdd } from 'react-icons/io'
import { MdCancel } from 'react-icons/md'

const showDialog = ({show, handleShow}) => {

//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(!show);
  return (
      <>
        <Modal show={show} onHide={handleShow} className='modal-font'>
          <Modal.Header closeButton>
            <Modal.Title className=''>ລົງທະບຽນ</Modal.Title>
          </Modal.Header>
          <Modal.Body>ປ້ອນຂໍ້ມູນຜູ້ໃຊ້ເພື່ອລົງທະບຽນ</Modal.Body>
          <Container className='mb-5'>
            <Form>
              <Row>
                <Col md={12}>
                  <Form.Control type='text' className='mb-3' placeholder='ຊື່' size='md' />
                </Col>
                <Col md={12}>
                  <Form.Control type='text' className='mb-3' placeholder='ອີເມວ' size='md' />
                </Col>
                <Col md={12}>
                  <Form.Control type='text' className='mb-3' placeholder='ລະຫັດຜ່ານ' size='md' />
                </Col>
              </Row>
            </Form>
            <Container className=''>
              <Button variant="outline-danger" size="md" className='mx-3 rounded-pill' onClick={handleShow}>
                <MdCancel /> ກັບຄືນ
              </Button>
              <Button variant="outline-dark" size="md" className='mx-3 rounded-pill' onClick={handleShow}>
                <IoMdAdd /> ບັນທຶກ
              </Button>
            </Container>
          </Container>
        </Modal>
        </>
  )
}
export default showDialog