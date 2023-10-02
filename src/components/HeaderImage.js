import React from "react";
import logo from "../assets/investment-calculator-logo.png";

export default function HeaderImage() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
