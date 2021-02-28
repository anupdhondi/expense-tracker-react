import React, { useContext } from "react";

import ExpenseContext from "../context/expense-context";

const Balance = () => {
  const context = useContext(ExpenseContext);
  return (
    <div>
      <h4>YOUR BALANCE</h4>
      <h1>$ {context.balance}</h1>
      <div className="income-exp-container">
        <div className="inc-container">
          <div>INCOME</div>
          <div>$ {context.income}</div>
        </div>
        <div id="vertical-line"></div>
        <div className="exp-container">
          <div>EXPENSE</div>
          <div>$ {context.expense}</div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
