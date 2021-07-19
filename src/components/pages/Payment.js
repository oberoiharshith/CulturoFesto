import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function shoot() {
  alert("Success");
}
function Payment() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <form>
      <h1>Payment Gateway</h1>

      <div style={{ marginLeft: "410px" }}>
        <tr align="center">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvv={cvv}
            focused={focus}
          />
          <input
            type="tel"
            name="number"
            placeholder="Card number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM-YY Expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            name="cvv"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />

          <button type="submit" className="btn btn-primary" onClick={shoot}>
            Make Payement
          </button>
        </tr>
      </div>
    </form>
  );
}

export default Payment;
