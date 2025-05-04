import React from 'react';
import Compras from '../components/Compras';
import Menu from '../components/Menu';
import Servicios from '../components/Servicios';
import UltimosDiez from '../components/UltimosDiez';
import Grafica from '../components/Grafica';


const Home = () => {
  return (
    <div>
      <Compras />
      <Servicios />
      <UltimosDiez />
      <Grafica />
    </div>
  );
};

export default Home;