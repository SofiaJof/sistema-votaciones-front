import React from 'react';
import './Admin.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sistema from '../assets/sist.vot.png';

function Sistema(){
    return (
    <Container className='admin-container'>
      <Row className='sistema-select'>
        <Col className='sistema-img'>
            <img alt ='sistema' src={sistema} ></img>
        </Col>
        <Col className='buttons-admin'>
            <div className='buttons-up'>
                <button>Padrón Admin</button>
                <button>Cargar elección</button>
            </div>
            <div className='buttons-down'>
                <button>Sistema Fiscal</button>
                <button>Escrutinio</button>
            </div>
        </Col>
      </Row>
      
    </Container>
   
    )
}
export default Sistema;