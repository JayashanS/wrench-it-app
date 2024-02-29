import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};
