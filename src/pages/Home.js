// import React, {useState} from 'react';
import React from 'react';
import Lists from '../components/Lists'
import Elecciones from '../components/Elecciones'

const Home = () => {

    return (
      <div className="lists">
          <Elecciones/>
          <Lists/> 
      </div>
  );
};


export default Home;