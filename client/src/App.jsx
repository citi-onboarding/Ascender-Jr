import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import OurServices from './components/OurServices/OurServices';
import ClientsAndPartners from './components/ClientsAndPartners/ClientsAndPartners';
import Contact from './components/Contact/Contact';

import './App.css';

function App() {
  return (
    <section className="app">
      <Navbar />
      <Banner />
      <AboutUs />
      <OurServices />
      <ClientsAndPartners />
      <Contact />
    </section>
  );
}

export default App;
