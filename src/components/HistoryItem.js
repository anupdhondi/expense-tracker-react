import React, { useContext } from "react";

import ExpenseContext from "../context/expense-context";

const HistoryItem = (props) => {
  const context = useContext(ExpenseContext);
  const onClickHandler = (name, quantity) => {
    const item = { name, quantity };
    context.removeItem(item);
  };
  return (
    <li className={props.quantity >= 0 ? "income-bar" : "expense-bar"}>
      {props.name} <span>$ {props.quantity}</span>
      <button className="delete-btn" onClick={() => onClickHandler(props.name, props.quantity)}>
        X
      </button>
    </li>
  );
};

export default HistoryItem;
