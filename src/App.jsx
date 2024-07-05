import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Diferenciais from './components/Diferenciais/Diferenciais';
import Dev from './components/Dev/Dev';
import SplineScene from './components/SplineScene/SplineScene';
import Footer from './components/Footer/Footer';





const App = () => {
    return (
  <div>
    <Navbar/>
    <Hero/>      
    <Diferenciais/>
    <Dev/>
    <SplineScene />
    <Footer />
    
 </div>
    );
};

export default App;
