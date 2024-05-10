import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

export const useToDoContext = () => {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error("useToDoContext must be used within a ToDoContextProvider");
  }
  return context;
};
