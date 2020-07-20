import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './ExtraMenuMobile.css';

export default function ExtraMenuMobile() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    api.get('/navbar').then(response => {
      const dataNav = response.data;

      setResponse(dataNav);
    });
  }, []);

  const handleClick = () => {
    if (response.length > 0) {
      const divs = document.querySelector(".sub-menu");
      divs.style.display = 'block';
    } else {
      console.log('oops');
    }
  };

  const handleLinks = () => {
    let items = [];

    response.map(({ _id, title, url }) => {
      return items.push(<div key={_id} className="extra-links">
        <a href={url}>{title}</a>
      </div>)
    })

    return items;
  };

  return (
    <div className="extra-mobile" onClick={handleClick}>
      <p>Extra</p>

      <div className="sub-menu">
        {handleLinks()}
      </div>
    </div>
  );
}
