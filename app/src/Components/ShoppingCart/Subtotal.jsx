import React from "react";

export default function Subtotal({ subtotal }) {
  return (
    <div className="subtotal rounded-border">
      <h4>Subtotal:</h4>
      <p>${subtotal}</p>
    </div>
  );
}
