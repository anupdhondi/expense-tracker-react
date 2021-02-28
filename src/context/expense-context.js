import { createContext } from "react";

const expenseContext = createContext({
  items: [],
  setItems: () => {},
  income: 0.0,
  expense: 0.0,
  removeItem: () => {},
});

export default expenseContext;
