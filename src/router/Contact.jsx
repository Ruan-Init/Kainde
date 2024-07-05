import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-content">
        <h2 className="contact-title">Endereço</h2>
        <p className="contact-address">Qnb 16, Lote 08.</p>
        <p className="contact-address">Taguatinga Norte, Distrito Federal.</p>
        <p className="contact-cnpj">CNPJ: 46.355.902/0001-41</p>
        <h2 className="contact-title">Contato</h2>
        <p className="contact-email">Email: kainde@kainde.com.br</p>
        <p className="contact-phone">Telefone: (61) 98239-7391</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
