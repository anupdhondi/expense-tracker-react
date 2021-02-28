import React, { useState, useContext } from "react";

import ExpenseContext from "../context/expense-context";

const NewTransaction = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const context = useContext(ExpenseContext);

  const newItemAdded = (e) => {
    e.preventDefault();
    const newItem = {
      name: item,
      quantity: +quantity,
    };
    context.setItems(newItem);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <hr />
      <form onSubmit={newItemAdded}>
        <label htmlFor="item">Item</label> <br />
        <input type="text" id="item" name="item" value={item} onChange={(e) => setItem(e.target.value)} />
        <br />
        <label htmlFor="quantity">
          Amount <br />
          (negative-expense, positive - income)
        </label>
        <br />
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default NewTransaction;
