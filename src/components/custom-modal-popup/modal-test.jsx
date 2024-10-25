import React, { useState } from "react";
import Modal from "./modal";
// import "./modal.css";

export default function ModalTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleModalPopup() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <Modal
              header={"Modal Header"}
              body={"Modal Body"}
              footer={"Modal Footer"}
            />
            <button onClick={handleToggleModalPopup}>Close Modal Popup</button>
          </div>
        </div>
      )}
    </div>
  );
}
