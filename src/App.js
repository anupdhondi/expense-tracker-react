import React, { useReducer } from "react";

import "./App.css";
import History from "./components/History";
import Balance from "./components/Balance";
import NewTransaction from "./components/NewTransaction";
import ExpenseContext from "./context/expense-context";

const reducer = (state, action) => {
  const copiedItems = [...state.items];
  switch (action.type) {
    case "ITEM_ADDED":
      copiedItems.push(action.payload);
      if (action.payload.quantity >= 0) {
        const newBalance = Math.abs(state.income + action.payload.quantity - state.expense);
        return { ...state, income: state.income + action.payload.quantity, items: copiedItems, balance: newBalance };
      } else {
        const newBalance = Math.abs(state.expense + Math.abs(action.payload.quantity) - state.income);
        return { ...state, expense: state.expense + Math.abs(action.payload.quantity), items: copiedItems, balance: newBalance };
      }
    case "ITEM_REMOVED":
      const itemIndex = state.items.findIndex((i) => i.name === action.payload.name);
      copiedItems.splice(itemIndex, 1);
      if (action.payload.quantity >= 0) {
        return { ...state, items: copiedItems, income: state.income - action.payload.quantity, balance: Math.abs(state.income - action.payload.quantity - state.expense) };
      } else {
        return { ...state, items: copiedItems, expense: state.expense - Math.abs(action.payload.quantity), balance: Math.abs(state.income - (state.expense - Math.abs(action.payload.quantity))) };
      }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    income: 0,
    expense: 0,
    balance: 0,
  });

  const itemsChangedHandler = (item) => {
    dispatch({ type: "ITEM_ADDED", payload: item });
  };

  const itemRemovedHandler = (item) => {
    dispatch({ type: "ITEM_REMOVED", payload: item });
  };

  return (
    <ExpenseContext.Provider value={{ items: state.items, setItems: itemsChangedHandler, income: state.income, expense: state.expense, balance: state.balance, removeItem: itemRemovedHandler }}>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <History />
        <NewTransaction />
      </div>
    </ExpenseContext.Provider>
  );
}

export default App;
