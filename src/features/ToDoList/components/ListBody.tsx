import { useToDoContext } from "../hooks/useToDoContext";
import { Task } from "./Task";

export const ListBody = () => {
  const { tasks, filter } = useToDoContext();

  return (
    <div className=" bg-gray-200 p-4 mt-3 rounded-md ">
      {tasks
        .filter(
          (task) =>
            task.status === "draft" ||
            (task.status === "pending" &&
              ["all", "pending"].includes(filter)) ||
            (task.status === "complete" && ["all", "complete"].includes(filter))
        )
        .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
        .map((task) => {
          return <Task key={task.id} task={task} />;
        })}
    </div>
  );
};
