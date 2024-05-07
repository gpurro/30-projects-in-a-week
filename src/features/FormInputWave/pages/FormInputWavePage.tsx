import { FormInputWave } from "../components/FormInputWave";

export const FormInputWavePage = () => {
  const style = {
    fontFamily: "'Muli', sans-serif",
  };

  return (
    <div
      className="bg-[#4682b4] text-white flex flex-col items-center justify-center h-screen overflow-hidden "
      style={style}
    >
      <FormInputWave></FormInputWave>
    </div>
  );
};
