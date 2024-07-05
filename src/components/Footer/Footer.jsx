import React from 'react';
import './Footer.css'; 
import logo from '../../assets/sublogo.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-section logo">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-section about">
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa dedicada a fornecer os melhores produtos e serviços aos nossos clientes.</p>
      </div>
      <div className="footer-section contact">
        <h2>Contato</h2>
        <p>Quer saber mais sobre como a Kainde Tecnologia pode transformar a TI da sua empresa? Entre em contato:</p>
        <p>Email: <a href="mailto:kainde@kainde.com.br">kainde@kainde.com.br</a></p>
        <p>Telefone: (61) 98239-7391</p>
      </div>
      <div className="footer-section address">
        <h2>Endereço</h2>
        <p>Qnb 16, Lote 08.</p>
        <p>Taguatinga Norte, Distrito Federal.</p>
        <p>CNPJ: 46.355.902/0001-41</p>
      </div>
      <div className="footer-bottom">
        <button className="back-to-top" onClick={scrollToTop}>
          Voltar ao Topo
        </button>
        <p className='rights'>© 2024. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;


