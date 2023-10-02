import React, { useState } from "react";
import HeaderImage from "./components/HeaderImage";
import InputForm from "./components/InputForm";
import Table from "./components/Table";

function App() {
  let userInvestmentData = {};
  const handleInvestmentData = (InvestmentData) => {
    // console.log(InvestmentData);
    userInvestmentData = InvestmentData;
  };

  // const [calculateInvestment, setCalculateInvestment] = useState([
  //   {
  //     currentSavings: 0,
  //     yearlyContribution: 0,
  //     expectedReturn: 0,
  //     duration: 0,
  //   },
  // ]);

  const yearlyData = []; // per-year results
  const [list, setList] = useState([{}]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // setCalculateInvestment([
    //   {
    //     currentSavings: userInvestmentData.currentSavings,
    //     yearlyContribution: userInvestmentData.yearlySavings,
    //     expectedReturn: userInvestmentData.expectedInerest / 100,
    //     duration: userInvestmentData.investmentDuration,
    //   },
    // ]);
    // console.log(calculateInvestment);

    // let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput["expected-return"] / 100;
    // const duration = +userInput["duration"];
    let currentSavings = userInvestmentData.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = userInvestmentData.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = userInvestmentData.expectedInerest / 100;
    const duration = userInvestmentData.investmentDuration;
    let totalInterest = 0;
    let previousYearlyInterest = 0;
    let investedCapital = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest = previousYearlyInterest + yearlyInterest;
      previousYearlyInterest = totalInterest;
      investedCapital = currentSavings - totalInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
        yearlyContribution: yearlyContribution,
      });
    }
    // console.log(yearlyData);
    setList(yearlyData);
    // console.log(list); 
    // do something with yearlyData ...
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
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table FinalOutput={list} />
    </div>
  );
}

export default App;
