import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ModalConfirm.css'
import image1 from "../images/image1.jpg";

// function ModalConfirm() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button className='button-confirm' variant="primary" onClick={handleShow}>
//         CONFIRMAR
//       </Button>
//       <Modal className='confirm-selection-modal'  show={show} onHide={handleClose}>
//           <Modal.Header className='confirm-selection-header'>
//           <Modal.Title className='title-confirm'>
//             <h4>¿Está seguro de confirmar selección y </h4>
//             <h4>realizar el voto?</h4>
//            </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className='confirm-selection-body'>
//           <Card className='confirm-card-body'>
//           <Card.Header className='title-header'>Candidatos seleccionados</Card.Header>
//             <ListGroup variant="flush">
//               <ListGroup.Item className='confirm-item'>
//                 <div className='confirm-selection'>
//                   <Card.Img variant="top" src={image1} />
//                   <div className='confirm-selection-text'>
//                     <h4 className='cargo'>presidente</h4>
//                     <Card.Subtitle className="name">Carla Ferrer</Card.Subtitle>
//                     <Card.Text className="lista">Lista verde "10" </Card.Text>
//                   </div>
//                 </div>
//                 <div className='confirm-selection'>
//                   <Card.Img variant="top" src={image1} />
//                   <div className='confirm-selection-text'>
//                     <h4 className='cargo'>vice-presidente</h4>
//                     <Card.Subtitle className="name">Matias Fernandez</Card.Subtitle>
//                     <Card.Text className="lista">Lista verde "10" </Card.Text>
//                   </div>
//                 </div>
//               </ListGroup.Item>
//               <ListGroup.Item className='confirm-item'>
//               <div className='confirm-selection'>
//                   <Card.Img variant="top" src={image1} />
//                   <div className='confirm-selection-text'>
//                     <h4 className='cargo'>Secretario</h4>
//                     <Card.Subtitle className="name">Maria Lopez</Card.Subtitle>
//                     <Card.Text className="lista">Lista verde "10" </Card.Text>
//                   </div>
//                 </div>
//                 <div className='confirm-selection'>
//                   <Card.Img variant="top" src={image1} />
//                   <div className='confirm-selection-text'>
//                     <h4 className='cargo'>Tesorero</h4>
//                     <Card.Subtitle className="name">Paula Perez</Card.Subtitle>
//                     <Card.Text className="lista">Lista verde "10" </Card.Text>
//                   </div>
//                 </div>
//               </ListGroup.Item>
//               <ListGroup.Item className='confirm-item'>
//               <div className='confirm-selection'>
//                   <Card.Img variant="top" src={image1} />
//                   <div className='confirm-selection-text'>
//                     <h4 className='cargo'>Cargo 1</h4>
//                     <Card.Subtitle className="name"> Marta Sanchez</Card.Subtitle>
//                     <Card.Text className="lista">Lista verde "10" </Card.Text>
//                   </div>
//                 </div>
//                 <div className='confirm-selection'>
//                   <Card.Img variant="top" src={image1} />
//                   <div className='confirm-selection-text'>
//                     <h4 className='cargo'>Cargo 2</h4>
//                     <Card.Subtitle className="name">Facundo Vega</Card.Subtitle>
//                     <Card.Text className="lista">Lista verde "10" </Card.Text>
//                   </div>
//                 </div>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Modal.Body>
//         <Modal.Footer className='footer-confirm'>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancelar
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Confirmar
//           </Button>
//         </Modal.Footer> 
//       </Modal>
//     </>
//   );
// }

// export default ModalConfirm



function ModalConfirm() {
  const [lgShow, setLgShow] = useState(false);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='button-confirm'onClick={() => setLgShow(true)}  onClick={handleShow}>Confirmar</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        show={show} onHide={handleClose}
      >
        <Modal.Header >
        <Modal.Title className='title-confirm'>
             <h4>¿Está seguro de confirmar selección y realizar el voto?</h4>
            </Modal.Title>
         </Modal.Header>
         <Modal.Body className='confirm-selection-body'>
           <Card className='confirm-card-body'>
           <Card.Header className='title-header'>Candidatos seleccionados</Card.Header>
             <ListGroup variant="flush">
               <ListGroup.Item className='confirm-item'>
                 <div className='confirm-selection'>
                   <Card.Img variant="top" src={image1} />
                   <div className='confirm-selection-text'>
                    <h4 className='cargo'>presidente</h4>                     
                    <Card.Subtitle className="name">Carla Ferrer</Card.Subtitle>
                     <Card.Text className="lista">Lista verde "10" </Card.Text>
                   </div>
                 </div>
                 <div className='confirm-selection'>
                   <Card.Img variant="top" src={image1} />
                   <div className='confirm-selection-text'>
                     <h4 className='cargo'>vice-presidente</h4>
                     <Card.Subtitle className="name">Matias Fernandez</Card.Subtitle>
                     <Card.Text className="lista">Lista verde "10" </Card.Text>
                   </div>
                 </div>
               </ListGroup.Item>
               <ListGroup.Item className='confirm-item'>
               <div className='confirm-selection'>
                   <Card.Img variant="top" src={image1} />
                   <div className='confirm-selection-text'>
                     <h4 className='cargo'>Secretario</h4>
                     <Card.Subtitle className="name">Maria Lopez</Card.Subtitle>
                     <Card.Text className="lista">Lista verde "10" </Card.Text>
                   </div>
                 </div>
                 <div className='confirm-selection'>
                   <Card.Img variant="top" src={image1} />
                   <div className='confirm-selection-text'>
                     <h4 className='cargo'>Tesorero</h4>
                     <Card.Subtitle className="name">Paula Perez</Card.Subtitle>
                     <Card.Text className="lista">Lista verde "10" </Card.Text>
                   </div>
                 </div>
               </ListGroup.Item>
               <ListGroup.Item className='confirm-item'>
               <div className='confirm-selection'>
                   <Card.Img variant="top" src={image1} />
                   <div className='confirm-selection-text'>
                     <h4 className='cargo'>Cargo 1</h4>
                     <Card.Subtitle className="name"> Marta Sanchez</Card.Subtitle>
                     <Card.Text className="lista">Lista verde "10" </Card.Text>
                   </div>
                 </div>
                 <div className='confirm-selection'>
                   <Card.Img variant="top" src={image1} />
                   <div className='confirm-selection-text'>
                     <h4 className='cargo'>Cargo 2</h4>
                     <Card.Subtitle className="name">Facundo Vega</Card.Subtitle>
                     <Card.Text className="lista">Lista verde "10" </Card.Text>
                   </div>
                 </div>
               </ListGroup.Item>
             </ListGroup>
           </Card>
         </Modal.Body>
         <Modal.Footer className='footer-confirm'>
           <Button variant="secondary" onClick={handleClose}>
             Cancelar
           </Button>
           <Button variant="primary" onClick={handleClose}>
             Confirmar
           </Button>
         </Modal.Footer> 
      </Modal>
    </>
  );
}

export default ModalConfirm;