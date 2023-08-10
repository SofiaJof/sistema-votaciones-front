import React from 'react';
import './Admin.css';
import ListGroup from 'react-bootstrap/ListGroup';

function Admin() {
  return (
    <ListGroup className='sistema-lista'>
      <ListGroup.Item> 
          <div className='conteo'>01</div>
          <h4>El usuario habilitado recibirá 2 Emails, uno con un código de seguridad único de votación, 
         el segundo con el link y otro código de seguridad para realizar su elección.</h4>
      </ListGroup.Item>
      <ListGroup.Item>
          <div className='conteo'>02</div>
          <h4>El sistema le permitirá ingresar con su usuario y contraseña</h4>
      </ListGroup.Item>
      <ListGroup.Item>
          <div className='conteo'>03</div>
          <h4>El usuario deberá elegir entre las opciones disponibles</h4>
      </ListGroup.Item>
      <ListGroup.Item>
          <div className='conteo'>04</div>
          <h4>Listo! Al finalizar la jornada democrática, todos los escribanos habilitados para votar,
          el administrador y los fiscales podrán ver el escrutinio final.</h4>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Admin;
