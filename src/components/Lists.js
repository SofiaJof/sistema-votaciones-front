import React from 'react';
import { Card } from 'react-bootstrap';
import './Lists.css'
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import Modal from './Modal.js';

function Lists () {
    const lista = [{
        id:1,
        lista: 'lista verde "10" ',
        name: "Carla Ferrer",
        vicePresidente: "Matias Fernandez",
        secretario: "Maria Lopez",
        tesorero: "Paula Perez",
        cargo1: "Marta Sanchez",
        cargo2: "Facundo Vega",
        imageUrl: image1,
    },
    {
        id:2,
        lista: 'lista roja "06" ',
        name: "Cristian Diaz",
        vicePresidente: "Micaela Suarez",
        secretario: "Julian Baez",
        tesorero: "Pablo Vega",
        cargo1: "Joaquin Pujol",
        cargo2: "Justina Blanco",
        imageUrl: image2,
    },
    {
        id:3,
        lista: 'lista azul "22" ',
        name: "Susana Mendez",
        vicePresidente: "Agustin Perez",
        secretario: "Melani Ruiz",
        tesorero: "Lujan Salinas",
        cargo1: "Norma Born",
        cargo2: "Rodrigo Peña",
        imageUrl: image3,
    },       
]
return (
    <div className='lista'>
      <h2>Listas</h2>
      <div className="wrapper">
        {lista.map((item) => {
          return (  
              <Card className="cards">
                <Card.Body>
                  <Card.Header className='title-lista' >{item.lista } </Card.Header> 
                  <Card.Img variant="top" src={item.imageUrl} />
                  <div className="name-presindente">
                    <h4 className='presidente'>presidente</h4>
                    <Card.Subtitle className="name">{item.name}</Card.Subtitle>
                  </div>
                  <Card.Text className="participantes">
                     <ul className='participantes-list'>
                        <li>Vice-presidente: {item.vicePresidente }</li> 
                        <li>secretario: {item.secretario}</li> 
                        <li>tesorero: {item.tesorero}</li> 
                        <li>cargo 1: {item.cargo1}</li> 
                        <li>cargo 2: {item.cargo2}</li> 
                     </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
          );
        })}
      </div>
      <div className='button-bt'>
        <Modal/>
      </div>
      </div>
  );
};

export default Lists;