import React, {Component} from 'react';
import './App.css';
import 'C:/Users/User/banner/node_modules/slick-carousel/slick/slick.css';
import 'C:/Users/User/banner/node_modules/slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import './Banner.css';

class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="slider-container">
        <Slider {...settings}>
          {Banner?.map(({ _id, text, imageUrl}) => (                
            <div className="main-content" key={_id}>    
                <img src= {imageUrl} className="Banner-image"/>
                <h1 className="text">{text}</h1>
            </div>
          ))}
        </Slider>
        <img src="./logooficial.png" alt=""/>
      </div>
    );
  }
}

export default Banner;