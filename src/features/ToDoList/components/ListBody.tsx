import { useToDoContext } from "../hooks/useToDoContext";
import { Task } from "./Task";

export const ListBody = () => {
  const { tasks, filter } = useToDoContext();

  return (
    <div>
      {tasks
        .filter(
          (task) =>
            task.status === "draft" ||
            (task.status === "pending" &&
              ["all", "pending"].includes(filter)) ||
            (task.status === "complete" && ["all", "complete"].includes(filter))
        )
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        .map((task) => {
          return <Task key={task.id} task={task} />;
        })}
    </div>
  );
};
