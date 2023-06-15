import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalVote() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>USTED YA VOTO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Los resultados se publicaran en breve</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">CERRAR</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalVote;