import { useState } from "react";
import { Squares } from "../interfaces/Squares";
import { Square } from "./Square";
import { checkEndOfTheGame, checkWinner } from "../services/ticTacToe";

export const TicTacToe = () => {
  const [squares, setSquares] = useState<Squares>(Array(9).fill(null));
  const [turn, setTurn] = useState<"x" | "o">("x");
  const [winner, setWinner] = useState<string | null>(null);

  const endOfGame = checkEndOfTheGame(squares) || winner !== null;

  const handleResetGame = () => {
    setSquares(Array(9).fill(null));
    setTurn("x");
    setWinner(null);
  };

  const updateSquares = (index: number) => {
    if (squares[index] || winner) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = turn;
    setSquares(newSquares);

    // check if someone wins
    const newWinner = checkWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      // check end of game
      if (checkEndOfTheGame(newSquares)) {
        setWinner("draw");
      } else {
        const newTurn = turn === "x" ? "o" : "x";
        setTurn(newTurn);
      }
    }
  };

  return (
    <div className="tic-tac-toe">
      <button onClick={handleResetGame} />
      <div className="grid grid-cols-3 gap-2">
        {Array.from("012345678").map((index) => (
          <Square
            key={index}
            index={+index}
            updateSquares={updateSquares}
            value={squares[+index]}
            endOfGame={endOfGame}
          />
        ))}
      </div>
      <div className=" text-4xl mt-10 text-center text-blue-900 font-bold ">
        {winner ? `${winner} won!!` : `Next turn: ${turn}`}
      </div>
      <div className=" mt-10 text-center ">
        {endOfGame && (
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
            onClick={handleResetGame}
          >
            Reset Game
          </button>
        )}
      </div>
    </div>
  );
};
