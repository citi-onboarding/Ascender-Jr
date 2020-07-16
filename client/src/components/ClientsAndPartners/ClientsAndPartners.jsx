import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import api from '../../services/api';

import './ClientsAndPartners.css';

const ClientsAndPartners = () => {

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    api.get('clients-and-partners').then(response => {
      setPartners(response.data);
    })
  }, [])

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 20000,
    autoplaySpeed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          infinite: true,
          speed: 10000,
          autoplaySpeed: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
          slidesPerRow: 1,
          vertical: true,
          verticalSwiping: true,
          swipeToSlide: true,
        }
      },
    ]
  };


  console.log(partners)

  return (
    <section id="section-clients-and-partners">
      <div className="container-carousel">
          <h1>Parceiros</h1>
        <Slider {...settings}>

          {partners.map(partner => (
            <div className="box-card" >
              <img className="partner-image" src={ partner.image.secure_url } alt="Partner"/>
              <div className="partner-info">
                <h2>{ partner.name }</h2>
                <p>{ partner.description }</p>
              </div>
            </div>
          ))}
          
        </Slider>

      </div>

    </section>  
  );
}

export default ClientsAndPartners;