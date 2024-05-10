import Button from "./Button";

interface ButtonPanelProps {
  handleClick: (buttonName: string) => void;
}
//recive the props -> handleClick funcion using object destructuring {handleClick}
export default function ButtonPanel({ handleClick }: ButtonPanelProps) {
  return (
    <div className=" flex flex-row flex-wrap flex-1 w-full ">
      <div className=" w-full mb-[1px] flex flex-auto ">
        {/* Handle Click is passed down to the Button Component */}
        <Button name="AC" clickHandler={handleClick} dark />
        <Button name="+/-" clickHandler={handleClick} dark />
        <Button name="%" clickHandler={handleClick} dark />
        <Button name="÷" clickHandler={handleClick} orange />
      </div>
      <div className=" w-full mb-[1px] flex flex-auto ">
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} orange />
      </div>
      <div className=" w-full mb-[1px] flex flex-auto ">
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} orange />
      </div>
      <div className=" w-full mb-[1px] flex flex-auto ">
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} orange />
      </div>
      <div className=" w-full mb-[1px] flex flex-auto ">
        <Button name="0" clickHandler={handleClick} wide />
        <Button name="." clickHandler={handleClick} dark />
        <Button name="=" clickHandler={handleClick} orange />
      </div>
    </div>
  );
}
