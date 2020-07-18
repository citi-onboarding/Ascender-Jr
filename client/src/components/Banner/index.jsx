import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './Banner.css';

import api from '../../services/api';

import logo from './logooficial.png';


const Banner = () => {


  const [banners, setBanners] = useState([]);

  useEffect(() => {

    api.get('/banner').then(response => {
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
          {banners.map(({ imageUrl, text, _id }) => (
            <div className="main-content" key={_id}>
                <img src= { imageUrl[0].url } className="Banner-image" alt=""/>
                <h1 className="text">{text}</h1>
            </div>
          ))}
        </Slider>
        <img id="logo-banner" src={ logo } alt=""/>
      </div>
    );
  }


export default Banner;