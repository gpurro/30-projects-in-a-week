import { ToDoList } from "../components/ToDoList";

export default function ToDoListPage() {
  const style = {
    fontFamily: "'Muli', sans-serif",
    background: "linear-gradient(to right, #d0d0d0, #c0c0c0)",
  };

  return (
    <div
      className=" text-white relative w-screen h-screen flex flex-col"
      style={style}
    >
      <h3 className=" mt-24 mb-12 text-center text-slate-800 ">TO-DO LIST</h3>
      <div className=" w-1/2 mx-auto aspect-square min-w-[300px] max-w-[750px]">
        <ToDoList />
      </div>
    </div>
  );
}
