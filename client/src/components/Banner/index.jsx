import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './Banner.css';

import api from '../../services/api';

import bannerBase from './banner-base.png';
import logo from './logooficial.png';


const Banner = () => {


  const [banners, setBanners] = useState([]);

  useEffect(() => {

    api.get('our-services').then(response => {
      const dataBanners = response.data;

      setBanners(dataBanners);
    });

  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
    return (
      <div id="slider-container">
        <Slider {... settings}>
          {banners.map(banner => (                
            <div className="main-content" key={banner.bannerName}>    
                <img src= { banner.imageUrl } className="Banner-image"/>
                <h1 className="text">{banner.text}</h1>
            </div>
          ))}
        </Slider>
        <img id="logo-banner" src={ logo } alt=""/>
      </div>
    );
  }


export default Banner;