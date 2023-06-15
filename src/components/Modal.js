import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Header.css'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Votar
      </Button>
      <Modal show={show} onHide={handleClose}>
         <Modal.Header>
          <Modal.Title className='title-modal-cod'>
            <h4>Ingrese código de seguridad recibidos por email</h4>
            <h4>(Ambos se enviaron en dos emails por separados)</h4> 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='form-modal'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Código verificación 1:</Form.Label>
              <Form.Control type="text" autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
              <Form.Label>Código verificación 2:</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='footer-cod'>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Validar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example