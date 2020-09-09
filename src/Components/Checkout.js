import React from "react";
import "../Styles/Checkout.css";
import SubTotal from "./SubTotal";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkou__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout__add"
        ></img>
        <div>
          <h2 className="checkout__title"> Your shopping basket</h2>
        </div>
      </div>
      <div className="checkou__right">
        <SubTotal />
      </div>
    </div>
  );
}
