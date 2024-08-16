import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-1'>
     <div className="hero-text">
     <h1>Sobre a <span>Kainde</span> Tecnologia.</h1>
     <p>A Kainde Tecnologia é uma empresa inovadora no setor de Tecnologia da Informação, comprometida em oferecer soluções robustas, eficientes e escaláveis para empresas de todos os tamanhos. Com uma equipe altamente qualificada e certificada, nós nos dedicamos a transformar a TI em um diferencial competitivo para nossos clientes.</p>
     <button className='btn-1'><Link to="/Sobre">Explorar mais</Link></button>
     </div>
    </div>
  )
}

export default Hero;