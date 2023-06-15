import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Seleccionar.css'
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import Checkbox from "./Checkbox"
import ModalConfirm from './ModalConfirm.js'

function Seleccionar() {
    const lista = [{
        id:1,
        lista: 'lista verde "10" ',
        name: "Carla Ferrer",
        vicePresidente: "Matias Fernandez",
        secretario: "Maria Lopez",
        tesorero: "Paula Perez",
        cargo1: "Marta Sanchez",
        cargo2: "Facundo Vega",
        imageUrl: image1     
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
        imageUrl: image2  
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
        imageUrl: image3  
    }  
]
  return (
<div> 
<div className='title-selecionar'>
    <h3>Se puede seleccionar lista completa o seleccionar una (1) opción por cargo</h3>
</div>  
  <div className='seleccionar'>
    {lista.map((item) => {
        return (  
        <Card style={{ width: '28rem' }}>
            <Card.Header className='title-item'>{item.lista} </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item className='title-vote'>Votar lista completa <Checkbox/> </ListGroup.Item>
                <ListGroup.Item> 
                    <Card.Img variant="top" src={item.imageUrl}/> 
                    <h4>Presidente: {item.name}</h4>
                    <Checkbox/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card.Img variant="top" src={item.imageUrl}/>
                    <h4>Vice-presidente: {item.vicePresidente}</h4>
                    <Checkbox/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card.Img variant="top" src={item.imageUrl}/>
                    <h4>secretario: {item.secretario}</h4>
                    <Checkbox/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card.Img variant="top" src={item.imageUrl}/>
                    <h4>tesorero: {item.tesorero}</h4>
                    <Checkbox/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card.Img variant="top" src={item.imageUrl}/>
                    <h4>cargo 1: {item.cargo1}</h4>
                    <Checkbox/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card.Img variant="top" src={item.imageUrl}/>
                    <h4>cargo 2: {item.cargo2}</h4>
                    <Checkbox/>
                </ListGroup.Item>
            </ListGroup>
        </Card>
      );
    })}
  </div>
  <div className='vote-confirm'>
    <Card className='white-vote'>
        <ListGroup className='white-vote-item'>
            <ListGroup.Item >VOTO EN BLANCO <Checkbox/></ListGroup.Item>
        </ListGroup>
    </Card>
    <ModalConfirm/>
  </div>
  </div>
);
}
export default Seleccionar