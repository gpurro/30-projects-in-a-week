import { useEffect, useRef, useState } from "react";
import { useToDoContext } from "../hooks/useToDoContext";
import { Task as TaskProp } from "../interfaces/Task";

interface TaskProps {
  task: TaskProp;
}
export const Task = ({ task }: TaskProps) => {
  const { removeTaskById, updateTask } = useToDoContext();
  const [text, setText] = useState(task.text);
  const [isComplete, setIsComplete] = useState<boolean>(
    task.status == "complete" ? true : false
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(task.status == "draft" ? true : false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnEdit = () => {
    setIsEditing(true);
  };

  const handleOnEditOK = () => {
    const newTask = {
      ...task,
      text,
      status: isComplete ? "complete" : "pending",
    } as TaskProp;
    updateTask(newTask);
    setIsEditing(false);
  };

  const handleOnEditCancel = () => {
    if (task.status == "draft") {
      removeTaskById(task.id);
    } else {
      setText(task.text);
      setIsComplete(task.status == "complete" ? true : false);
    }
    setIsEditing(false);
  };

  const handleOnEditKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleOnEditOK();
      inputRef.current?.blur();
    } else if (event.key === "Escape") {
      handleOnEditCancel();
    }
  };

  const handleOnRemove = () => {
    removeTaskById(task.id);
  };

  const handleOnTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleOnCompleteChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.checked;
    const newTask = {
      ...task,
      text,
      status: newValue ? "complete" : "pending",
    } as TaskProp;
    updateTask(newTask);
    setIsComplete(newValue);
  };

  useEffect(() => {
    if (isNew) {
      inputRef.current?.focus();
      inputRef.current?.select();
      setIsNew(false);
    }
  }, [isNew]);

  return (
    <div>
      {!isEditing && (
        <div>
          <button
            onClick={handleOnRemove}
            className=" bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md active:scale-95 "
          >
            Remove
          </button>
        </div>
      )}
      {isEditing && (
        <div>
          <button
            onClick={handleOnEditCancel}
            className=" bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md active:scale-95 "
          >
            Cancel
          </button>
          <button
            onClick={handleOnEditOK}
            className=" bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md active:scale-95 "
          >
            OK
          </button>
        </div>
      )}

      <div>
        <div>
          <input
            type="text"
            value={text}
            className={` ${isComplete ? " line-through " : ""} `}
            onChange={handleOnTextChange}
            onFocus={handleOnEdit}
            onKeyDown={handleOnEditKeyDown}
            ref={inputRef}
          />
        </div>
        <div>
          <input
            type="checkbox"
            disabled={isEditing}
            checked={isComplete}
            onChange={handleOnCompleteChange}
          />
        </div>
      </div>
    </div>
  );
};
