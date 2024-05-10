import { Calculator } from "../components/Calculator";

export const CalculatorPage = () => {
  const style = {
    fontFamily: "'Muli', sans-serif",
    background: "linear-gradient(to right, #d0d0d0, #c0c0c0)",
  };

  return (
    <div className=" text-white relative w-screen h-screen flex" style={style}>
      <div className=" w-1/3 m-auto aspect-square ">
        <Calculator></Calculator>
      </div>
    </div>
  );
};
