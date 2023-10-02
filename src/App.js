import React, { useState } from "react";
import HeaderImage from "./components/HeaderImage";
import InputForm from "./components/InputForm";
import Table from "./components/Table";

function App() {
  let userInvestmentData = {};
  const handleInvestmentData = (InvestmentData) => {
    userInvestmentData = InvestmentData;
  };

  const yearlyData = [];
  const [list, setList] = useState([{}]);

  const calculateHandler = () => {
    let currentSavings = userInvestmentData.currentSavings;
    const yearlyContribution = userInvestmentData.yearlySavings;
    const expectedReturn = userInvestmentData.expectedInerest / 100;
    const duration = userInvestmentData.investmentDuration;
    let totalInterest = 0;
    let previousYearlyInterest = 0;
    let investedCapital = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest = previousYearlyInterest + yearlyInterest;
      previousYearlyInterest = totalInterest;
      investedCapital = currentSavings - totalInterest;
      yearlyData.push({
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
        yearlyContribution: yearlyContribution,
      });
    }
    setList(yearlyData);
  };

  const resetHandler = () => {
    setList([{}]);
  };

  return (
    <div>
      <HeaderImage />
      <InputForm
        calulateUserData={calculateHandler}
        resetHandler={resetHandler}
        getInvestmentData={handleInvestmentData}
      />
      <Table FinalOutput={list} />
    </div>
  );
}

export default App;
