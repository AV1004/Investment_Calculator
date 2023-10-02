import React from "react";
import Output from "./Output";
export default function OutputMiddleWare(props) {
  return props.passDataToOutputCom.map((data) => (
    <Output
      key={data.year}
      year={data.year}
      currentSavings={data.totalSavings}
      interest={data.yearlyInterest}
      totalInterest={data.totalInterest}
      investedCapital={data.investedCapital}
    />
  ));
}
