interface ButtonProps {
  name: string;
  orange?: boolean;
  dark?: boolean;
  wide?: boolean;
  clickHandler: (name: string) => void;
}

//Button component reacives all the destructured props
export default function Button({ name, orange, dark, wide, clickHandler }: ButtonProps) {
  return (
    <div
      className={` inline-flex flex-auto ${
        wide ? " w-1/2 " : " w-1/4 "
      } border border-black rounded m-1 `}
    >
      <button
        onClick={() => clickHandler(name)}
        className={` bg-[#e0e0e0] border-0 text-2xl mr-[1px] flex-auto text-black rounded-md ${
          orange ? " bg-[#f5923e] " : dark ? " bg-[#c0c0c0] " : ""
        } active:scale-95 hover:bg-[#c0c0c0] `}
      >
        {name}
      </button>
    </div>
  );
}
