import {Container, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './ContainerVote.css';

function ContainerVote() {
  return (
    <Container>
       <Table responsive  className='table table-borderless'>
      <thead className='table-header'>
        <tr>
          <th colSpan={4}  style={{
             backgroundColor: "#D17901",
             color:"#ffffffff",
             borderRadius: 5,
             fontSize: 22,
          }}>Constancias de voto</th>
        </tr>
      </thead>
      <tbody >
        <tr style={{
            fontWeight: "bold",
            fontSize: 16,
          }}>
          <td>Nombre y apellido</td>
          <td>Fecha</td>
          <td>Hora</td>
          <td>Nombre elección</td>
        </tr>
        <tr>
          <td>Carlos Gomez</td>
          <td>01/12/2022</td>
          <td>09:32</td>
          <td>Elecciones directivas 2022</td>
        </tr>
      </tbody>
    </Table>
    <div className='button-descargar-container'>
    <Button className='button-descargar' style={{
        backgroundColor: "#D17901",
        color:"#ffffffff",
        borderRadius: 4,
        fontWeight: "bold", 
      }}>
        Descargar Constancia
      </Button>
     </div>
    </Container>
  );
}

export default ContainerVote;