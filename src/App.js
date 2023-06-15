import './App.css';
import {  Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ContainerVote from './components/ContainerVote';
import Votacion from './pages/Votacion';


function App() {
  return (
    <>
    <Header/>
    <Container>
         <Routes >
          <Route path='/' element={<Home/>} /> 
          <Route path='/vote' element={<Votacion/>} /> 
          <Route path='/constancia' element={<ContainerVote />} />
         </Routes>
      </Container>
      <Footer/>
    </>  
  );
}

export default App;
