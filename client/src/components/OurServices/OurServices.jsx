import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import './OurServices.css';

import api from '../../services/api';

const OurServices = () => {


  const [ourServices, setOurServices] = useState([]);

  useEffect(() => {

    api.get('our-services').then(response => {
      const dataOurServices = response.data;

      setOurServices(dataOurServices);
    });

  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="section-our-services">
      <div className="container-carousel">
          <h1>Serviços</h1>
        <Slider {...settings}>
        
          {ourServices.map(ourService => (
            
            <div key={ourService.serviceName} className="card">
              <div className="primary-card">
                <div className="content">
                  <img className="primary-card-image" src={ourService.serviceImage.url} alt=""/>
                  <div className="description">
                    <h3>{ourService.serviceName}</h3>
                    <p>{ourService.serviceDescription}</p>
                  </div>
                </div>
              </div>

              <div className="secondary-card">

                <div className="box-before">
                  <div className="content">
                    <img className="before-image" src={ourService.beforeService.image.secure_url} alt=""/>
                    <div className="description">
                      <h3>{ourService.beforeService.text}</h3>
                    </div>
                  </div>
                </div>

                <div className="box-after">
                  <div className="content">
                    <img className="after-image" src={ourService.afterService.image.secure_url} alt=""/>
                    <div className="description">
                      <h3>{ourService.afterService.text}</h3>
                    </div>
                  </div>
                </div>

              </div>
          
          </div>
          ))}
        </Slider>

      </div>

    </section>  
  );
}

export default OurServices;