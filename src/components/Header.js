import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import {NavLink} from 'react-router-dom';
import logo from '../assets/Logo.svg'
import './Header.css'
import Modal from './Modal.js'

const Header = () => {
    // let activeStyle = {
    //     color:"#C0392B ",
    // };
    return (
        <div className='header'>
            <Navbar expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand className='title'>
                        <a href='/'><img alt='logo' src={logo}></img> </a>
                        </Navbar.Brand>
                     {/* <Navbar.Toggle />  */}
                    {/* <Navbar.Collapse > -->Esto hacía que el botón ya no se vea cuando se achica la pantalla */} 
                        <Nav className='ml-auto'>
                            <Modal/>
                            {/* <button className= 'button' >VOTAR</button> */}
                            {/* <NavLink to="/gifs" className="nav-link" >Projects</NavLink>  */}
                        </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
          
        </div>
    );
};

export default Header;