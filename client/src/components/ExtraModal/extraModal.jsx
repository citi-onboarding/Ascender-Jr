import React from 'react';
import './extraModal.css';

const ExtraModal = () => {

    const closeExtra = () => {
        const extraModal = document.querySelector('.fundo-extra');
        extraModal.style.display = 'none';
    }


    return (
        <div className="fundo-extra">
        <div className="box-extra">
            <button className="close-extra" onClick={closeExtra}>X</button>
            <p>Ops, ainda trabalhando nessa seção</p>
        </div>
        </div>
    );
}
export default ExtraModal;