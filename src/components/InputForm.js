import React, { useState } from "react";

export default function InputForm(props) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInerest, setExpectedInerest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const expectedInerestHandler = (event) => {
    setExpectedInerest(event.target.value);
  };

  const investmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const InvestmentData = {
      currentSavings: parseFloat(currentSavings),
      yearlySavings: parseFloat(yearlySavings),
      expectedInerest: parseFloat(expectedInerest),
      investmentDuration: parseFloat(investmentDuration),
    };

    props.getInvestmentData(InvestmentData);
    props.calulateUserData();
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInerest("");
    setInvestmentDuration("");
    props.resetHandler();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInerest}
            onChange={expectedInerestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={investmentDurationHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
