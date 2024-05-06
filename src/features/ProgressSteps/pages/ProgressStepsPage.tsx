import { useState } from "react";
import { ProgressSteps } from "../components/ProgressSteps";

export const ProgressStepsPage = () => {
  const steps = ["1", "2", "3", "4"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const lastStep = steps.length - 1;

  return (
    <div className=" box-border bg-[#f1f1f1] flex flex-col items-center justify-center h-screen overflow-hidden m-0 ">
      <ProgressSteps steps={steps} currentIndex={currentIndex} />
      <div className=" flex items-center gap-10">
        <button
          className=" text-white bg-[#3498db] px-4 py-2 rounded-md disabled:opacity-50 focus:outline-none active:scale-95 "
          disabled={currentIndex === 0}
          onClick={() =>
            currentIndex > 0 ? setCurrentIndex((prev) => prev - 1) : null
          }
        >
          Previous
        </button>
        <button
          className=" text-white bg-[#3498db] px-4 py-2 rounded-md disabled:opacity-50 focus:outline-none active:scale-95"
          disabled={currentIndex === lastStep}
          onClick={() =>
            currentIndex < lastStep ? setCurrentIndex((prev) => prev + 1) : null
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
