import React from 'react';
import Compras from '../components/Compras';
import Menu from '../components/Menu';
import Servicios from '../components/Servicios';
import UltimosDiez from '../components/UltimosDiez';


const Home = () => {
  return (
    <div>
      <Compras />
      <Servicios />
      <UltimosDiez />
    </div>
  );
};

export default Home;