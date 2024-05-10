import { Squares } from "../interfaces/Squares";

export const checkEndOfTheGame = (squares: Squares) => {
  for (let square of squares) {
    if (!square) return false;
  }
  return true;
};

export const checkWinner = (squares: Squares) => {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of combos) {
    const [a, b, c] = combo;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
