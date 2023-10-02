import React from "react";
import OutputMiddleWare from "./OutputMiddleware";

export default function Table(props) {
  if (props.FinalOutput.length === 1 || props.FinalOutput.length === 0) {
    return <p className="null-result">No investment calculated yet!</p>;
  }
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <OutputMiddleWare passDataToOutputCom={props.FinalOutput} />
    </table>
  );
}
