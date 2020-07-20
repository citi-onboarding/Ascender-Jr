import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServices from "./components/OurServices/OurServices";
import ClientsAndPartners from "./components/ClientsAndPartners/ClientsAndPartners";
import Contact from "./components/Contact/Contact";

import ModalContext from "./contexts/ModalContext";

import "./App.css";

function App() {
  // Modal Context
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="app">
      <ModalContext.Provider
        value={{
          openModal,
          setOpenModal,
        }}
      >
        <Navbar />
        <Banner />
        <AboutUs />
        <OurServices />
        <ClientsAndPartners />
        <Contact />
      </ModalContext.Provider>
    </section>
  );
}

export default App;
