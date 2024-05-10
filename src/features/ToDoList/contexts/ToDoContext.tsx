import { createContext, useState } from "react";
import { Task } from "../interfaces/Task";

interface ToDoContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  removeTaskById: (id: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
}
export const ToDoContext = createContext<ToDoContextType | null>(null);

export const ToDoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialTasks: Task[] = JSON.parse(
    localStorage.getItem("tasks") || "[]"
  );

  const [filter, setFilter] = useState<string>("all");
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const addTask = (task: Task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  const removeTaskById = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const updateTask = (task: Task) => {
    const otherTasks = tasks.filter((t) => t.id !== task.id);
    const newTasks = [...otherTasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const initialValue: ToDoContextType = {
    tasks,
    addTask,
    updateTask,
    removeTaskById,
    filter,
    setFilter,
  };
  return (
    <ToDoContext.Provider value={initialValue}>{children}</ToDoContext.Provider>
  );
};
