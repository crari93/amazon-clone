import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
    </div>
  );
}
