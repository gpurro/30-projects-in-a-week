import { ToDoContextProvider } from "../contexts/ToDoContext";
import { ListBody } from "./ListBody";
import { ListHeader } from "./ListHeader";

export const ToDoList = () => {
  return (
    <div className="w-full flex flex-col ">
      <ToDoContextProvider>
        <ListHeader />
        <ListBody />
      </ToDoContextProvider>
    </div>
  );
};
