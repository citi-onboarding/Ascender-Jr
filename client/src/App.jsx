import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import OurServices from './components/OurServices/OurServices';
import ClientsAndPartners from './components/ClientsAndPartners/ClientsAndPartners';
import Contact from './components/Contact/Contact';
import ExtraMenu from './components/ExtraMenu/Index';
// import ExtraModal from './components/ExtraModal/extraModal';

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
      {/* <ExtraMenu /> */}
    </section>
  );
}

export default App;
