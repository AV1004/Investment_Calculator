import React from "react";

export default function Output(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <tbody>
      <tr>
        <td>{props.year}</td>
        <td>{formatter.format(props.currentSavings)}</td>
        <td>{formatter.format(props.interest)}</td>
        <td>{formatter.format(props.totalInterest)}</td>
        <td>{formatter.format(props.investedCapital)}</td>
      </tr>
    </tbody>
  );
}
