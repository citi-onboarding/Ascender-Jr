import React, { useEffect } from "react";
import "./extraModal.css";

const ExtraModal = ({ openModal }) => {
  const closeExtra = () => {
    const extraModal = document.querySelector(".fundo-extra");
    extraModal.style.display = "none";
  };

  useEffect(() => {
    if (openModal) {
      const extraModal = document.querySelector(".fundo-extra");
      extraModal.style.display = "block";
    }
  }, [openModal]);

  return (
    <div className="fundo-extra">
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
