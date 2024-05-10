type SquareProps = {
  index: number;
  value: string | null;
  updateSquares: (index: number) => void;
  endOfGame: boolean;
};

export const Square = ({
  index,
  value,
  updateSquares,
  endOfGame,
}: SquareProps) => {
  const handleOnClick = () => {
    updateSquares(index);
  };

  return (
    <div
      className={` bg-black text-white w-full shadow-2xl aspect-square border-2 border-[#eee] rounded-md  ${
        endOfGame
          ? " cursor-not-allowed "
          : " cursor-pointer active:scale-95 hover:bg-gray-800 "
      } flex  transition-transform duration-200`}
      onClick={handleOnClick}
    >
      <span className="m-auto font-bold text-6xl ">{value}</span>
    </div>
  );
};
