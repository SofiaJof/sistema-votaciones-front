import React from 'react';
import './Elecciones.css'
import urna from '../assets/urna.png'
import lira from '../assets/lira.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Elecciones(){
    return (
        // <div className='container-votacion'>
        //     <div className='urna'>
        //         <img alt='urna' src={urna}></img>
        //         <div className='urna-text'>
        //          <img alt ='lira' src={lira}></img>
        //        </div> 
        //     </div>    
        //     <div className='elecciones'>
        //         <h3>Elecciones Directivas 2022</h3>
        //         <h4>Caja Notarial - Colegio de escribanos</h4>
        //     </div>
               
        // </div>

<Container className='container-votacion'>
<Row className='votacion'>
  <Col className='urna'>
      <img alt='urna' src={urna}></img>
      <div className='urna-text'>
        <img alt ='lira' src={lira}></img>
      </div> 
  </Col>
  <Col className='elecciones'>
      <div className='elecciones'>
          <h3>Elecciones Directivas 2022</h3>
          <h4>Caja Notarial - Colegio de escribanos</h4>
      </div>
  </Col>
</Row>

</Container>
    )
}
export default Elecciones;