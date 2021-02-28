import React, { useContext } from "react";

import HistoryItem from "./HistoryItem";
import ExpenseContext from "../context/expense-context";

const History = () => {
  const context = useContext(ExpenseContext);
  return (
    <div>
      <h3>History</h3>
      <hr />
      <ul className="unordered-list">
        {context.items.map((item) => (
          <HistoryItem key={item.name} name={item.name} quantity={item.quantity} />
        ))}
      </ul>
    </div>
  );
};

export default History;
