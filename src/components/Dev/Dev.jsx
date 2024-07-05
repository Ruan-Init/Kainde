import React from 'react';
import './Dev.css';
import Globo from '../../assets/globo.png';
import Unicred from '../../assets/unicred.png';
import Credisis from '../../assets/credisis.png';
import Mme from '../../assets/mme.png';
import Destaxa from '../../assets/destaxa.png';
import Uello from '../../assets/uello.png';
import Paschoalotto from '../../assets/paschoalotto.png'

const Dev = () => {
  return (
    <div className='div-principal'>
      <h1>Nossos Clientes</h1>
      <div className='image-container'>
        <img className="cliente" src={Globo} alt="Globo" />
        <img className="cliente" src={Unicred} alt="Unicred" />
        <img className="cliente" src={Credisis} alt="Credisis" />
        <img className="cliente" src={Mme} alt="MME" />
        <img className="cliente" src={Destaxa} alt="Destaxa" />
        <img className="cliente" src={Uello} alt="Uello" />
        <img className="cliente" src={Paschoalotto} alt="Paschoalotto" />
      </div>
    </div>
  );
}

export default Dev;
