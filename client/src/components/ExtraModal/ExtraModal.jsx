import React, { useEffect } from "react";
import "./extraModal.css";

const ExtraModal = ({ openModal, setOpenModal }) => {
  const closeExtra = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (openModal) {
      const extraModal = document.querySelector(".fundo-extra");
      extraModal.style.display = 'flex';
    } else {
      const extraModal = document.querySelector(".fundo-extra");
      extraModal.style.display = 'none';
    }
  }, [openModal]);

  return (
    <div className="fundo-extra hidden">
      <div className="box-extra">
        <button className="close-extra" onClick={closeExtra}>
          X
        </button>
        <p>Ops, ainda trabalhando nessa seção</p>
      </div>
    </div>
  );
};
export default ExtraModal;
