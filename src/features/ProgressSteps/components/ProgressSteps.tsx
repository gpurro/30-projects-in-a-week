import "./ProgressSteps.css";

interface ProgressStepsProps {
  steps: string[];
  currentIndex: number;
}
export const ProgressSteps = ({ steps, currentIndex }: ProgressStepsProps) => {
  const progressStyle = {
    width: `${(currentIndex / (steps.length - 1)) * 100}%`,
  };
  return (
    <div className=" flex justify-between relative mb-7 max-w-full w-[350px]">
      <div className="absolute bg-[#e0e0e0] top-[50%] left-0 h-1 w-full -translate-y-[50%]"></div>
      <div
        className="absolute bg-[#3498db] top-[50%] left-0 h-1 w-full -translate-y-[50%] z-10 ease-in duration-500"
        style={progressStyle}
      ></div>
      {steps.map((step, index) => {
        return (
          <div
            key={index}
            className={`bg-[#fff] text-gray-500 rounded-full flex h-full aspect-[1] items-center justify-center border-solid border-4 z-20 ease-in duration-500 ${
              index <= currentIndex ? "border-[#3498db] " : "border-[#e0e0e0] "
            }`}
          >
            {step}
          </div>
        );
      })}
    </div>
  );
};
