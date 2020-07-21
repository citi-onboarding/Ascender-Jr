import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import api from '../../services/api';
import './ExtraMenu.css';

export default function ExtraMenu({ setOpenModal }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    api.get('/navbar').then(response => {
      const dataNav = response.data;

      setResponse(dataNav);
    });
  }, []);

  const handleClick = (event) => {
    if (response.length > 0) {
      setAnchorEl(event.currentTarget);
    } else {
      setOpenModal(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="extra-menu">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="button">
        EXTRA
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {response.map(({ _id, title, url }) => {
          return <MenuItem onClick={handleClose} key={_id}>
            <a href={url}>{title}</a>
          </MenuItem>
        })}
      </Menu>
    </div>
  );
}
