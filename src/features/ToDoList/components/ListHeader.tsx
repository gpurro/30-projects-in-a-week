import { useToDoContext } from "../hooks/useToDoContext";
import { Task } from "../interfaces/Task";

export const ListHeader = () => {
  const { addTask, filter, setFilter } = useToDoContext();

  const handleOnClick = () => {
    const newTask: Task = {
      id: Math.random().toString(),
      text: "New Task",
      status: "draft",
      createdAt: new Date().toISOString(),
    };

    addTask(newTask);
  };

  const handleOnFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter(event.target.value);
  };

  return (
    <div className=" m-0 flex flex-row justify-between ">
      <div className="">
        <button
          onClick={handleOnClick}
          className=" bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md active:scale-95 "
        >
          Add Task
        </button>
      </div>
      <div>
        <select
          onChange={handleOnFilterChange}
          className=" text-lg text-black font-bold py-2 px-4 rounded-md"
          value={filter}
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
};
