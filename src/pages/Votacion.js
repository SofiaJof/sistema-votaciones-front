import React from 'react';
import Elecciones from '../components/Elecciones'
import Seleccionar from '../components/Seleccionar'

const Votacion = () => {

    return (
      <div className="vote">
          <Elecciones/>
          <Seleccionar/>
      </div>
  );
};


export default Votacion;