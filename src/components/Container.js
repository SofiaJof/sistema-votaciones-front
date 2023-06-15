import React from 'react';
import './Container.css'
import urna from '../assets/urna.png'
import lira from '../assets/lira.png'

function Container(){
    return (
        <div className='container-votacion'>
            <div className='urna'>
                <img alt='urna' src={urna}></img>
                <div className='urna-text'>
                 <img alt ='lira' src={lira}></img>
                    {/* <h3>Lira</h3>
                    <h4>Sistema de vitaciones</h4> */}
               </div> 
            </div>    
            <div className='elecciones'>
                <h3>Elecciones Directivas 2022</h3>
                <h4>Caja Notarial - Colegio de escribanos</h4>
            </div>
               
        </div>
    )
}
export default Container;