import React from 'react';
import Compras from '../components/Compras';
import Menu from '../components/Menu';
import Servicios from '../components/Servicios';


const Home = () => {
  return (
    <div>
      <Menu />  
      <Compras />
      <Servicios />
    </div>
  );
};

export default Home;