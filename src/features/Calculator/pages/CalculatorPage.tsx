import { Calculator } from "../components/Calculator";

export const CalculatorPage = () => {
  const style = {
    fontFamily: "'Muli', sans-serif",
    background: "linear-gradient(to right, #2b3f50, #325673)",
  };

  return (
    <div className=" text-white relative w-screen h-screen flex " style={style}>
      <div className=" w-1/3 m-auto aspect-square ">
        <Calculator></Calculator>
      </div>
    </div>
  );
};
