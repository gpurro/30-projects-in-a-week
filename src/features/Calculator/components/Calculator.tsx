import { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../services/calculate";
import type { CalculatorData } from "../interfaces/CalculatorData";

export const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  } as CalculatorData);

  // -->Handle Click function that takes a button value
  //    passes it through the logic.js
  //    and sets the state to the object returned from calculate
  function handleClick(buttonName: string) {
    // console.log(buttonName);
    const newState = calculate(state, buttonName);
    setState(newState);
  }

  return (
    <div className=" bg-[#f0f0f0] text-white flex flex-col items-center justify-center h-full overflow-hidden border-black shadow-md border rounded-xl p-2 ">
      {/* State is sent to the display component */}
      <Display value={state.next || state.total || "0"} />

      {/* handleClick is a callback function that sends back button name */}
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};
