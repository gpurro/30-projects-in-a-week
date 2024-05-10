import { TicTacToe } from "../components/TicTacToe";

export const TicTacToePage = () => {
  const style = {
    fontFamily: "'Muli', sans-serif",
    background: "linear-gradient(to right, #d0d0d0, #c0c0c0)",
  };

  return (
    <div
      className=" text-white relative w-screen h-screen flex flex-col"
      style={style}
    >
      <h3 className=" mt-24 mb-12 text-center text-slate-800 ">TIC TAC TOE</h3>
      <div className=" w-1/3 mx-auto aspect-square min-w-[300px] ">
        <TicTacToe />
      </div>
    </div>
  );
};
