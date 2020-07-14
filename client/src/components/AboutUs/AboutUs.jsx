import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './AboutUs.css';

import Ray from '../../assets/ray.png';

import ChipWeb from '../../assets/chip-web.svg';
import ChipMobile from '../../assets/chip-mobile.svg';


const AboutUs = () => {

  const [vision, setVision] = useState({});
  const [mission, setMision] = useState({});

  const [valueArray, setValueArray] = useState([]);
  const [valuesImage, setValuesImage] = useState('');

  const [companyHistory, setCompanyHistory] = useState('');


  useEffect(() => {

    api.get('about-us').then(response => {
      const dataAboutUs = response.data[0];

      
      setVision({
        text: dataAboutUs.vision.text,
        image_url: dataAboutUs.vision.image.secure_url
      });

      setMision({
        text: dataAboutUs.mission.text,
        image_url: dataAboutUs.mission.image.secure_url
      });

      setValueArray(dataAboutUs.values.valueArray);

      setValuesImage(dataAboutUs.values.image.secure_url);

      setCompanyHistory(dataAboutUs.companyHistory);

    });
    
  }, []);
  
  return (
  <section id="section-about-us">

    <div className="container">
      <h1>Sobre nós</h1>
      <article className="cards">

        <div className="primary-cards">

          <div className="vision-card">
            <div className="container-image">
              <img className="chip-image web" src={ ChipWeb } alt=""/>
              <img className="chip-image mobile" src={ ChipMobile } alt="" style={{ display: "none" }}/>
              <img className="image" src={ vision.image_url } alt=""/>
            </div>
            <h2>Visão</h2>
            <p>{ vision.text }</p>
          </div>

          <div className="mission-card">
            <div className="container-image">
              <img className="chip-image web" src={ ChipWeb } alt=""/>
              <img className="chip-image mobile" src={ ChipMobile } alt="" style={{ display: "none" }}/>
              <img className="image" src={ mission.image_url } alt=""/>
            </div>
            <h2>Missão</h2>
            <p>{ mission.text }</p>
          </div>

          <div className="values-card">
              <div className="container-image">
                <img className="chip-image web" src={ ChipWeb } alt=""/>
                <img className="chip-image mobile" src={ ChipMobile } alt="" style={{ display: "none" }}/>
                <img className="image" src={ valuesImage } alt=""/>
              </div>
            <h2>Valores</h2>
            <ul>
              { valueArray.map( value => (
                <li key={value}>{ value }</li>
              ))}
            </ul>
          </div>

        </div>
                
        <div className="company-history">
          <div className="company-subtitle">
            <img className="ray" src={ Ray } alt="" />
              <h2>A Empresa</h2>
            <img className="ray" src={ Ray } alt="" />
          </div>
          <p>
            {companyHistory}
          </p>
        </div>

      </article>
    </div>
    
  </section>
  );
}

export default AboutUs;