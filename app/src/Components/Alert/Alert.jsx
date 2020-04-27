import React from "react";
import "./style.css";

export default function Alert({ alert, alertInfo, onYesClick, onNoClick }) {
  return (
    <div className="black-container">
      <div className="alert-section">
        <h1>{alert}</h1>
        <div className="alert-content">
          <p>{alertInfo}</p>
          <div className="btns">
            <button onClick={onYesClick}>Yes</button>
            <button onClick={onNoClick}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}
