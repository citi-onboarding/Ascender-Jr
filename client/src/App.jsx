import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServices from "./components/OurServices/OurServices";
import ClientsAndPartners from "./components/ClientsAndPartners/ClientsAndPartners";
import Contact from "./components/Contact/Contact";
import ExtraModal from './components/ExtraModal/ExtraModal';

import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="app">
      <Navbar setOpenModal={setOpenModal} />
      <Banner />
      <AboutUs />
      <OurServices />
      <ClientsAndPartners />
      <Contact />

      <ExtraModal openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
}

export default App;
