import { ToDoContextProvider } from "../contexts/ToDoContext";
import { ListBody } from "./ListBody";
import { ListHeader } from "./ListHeader";

export const ToDoList = () => {
  return (
    <ToDoContextProvider>
      <ListHeader />
      <ListBody />
    </ToDoContextProvider>
  );
};
