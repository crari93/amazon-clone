import React from "react";
import "../Styles/SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

export default function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}):
              <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix="$"
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
