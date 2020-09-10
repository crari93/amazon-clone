import React from "react";
import "../Styles/CheckoutProduct.css";

export default function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <button>Remove from Basket</button>
      </div>
    </div>
  );
}
