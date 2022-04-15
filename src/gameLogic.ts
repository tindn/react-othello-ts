import { moveOne } from "./boardLogic";
import { Color, Direction, GamePieces } from "./types";

const allDirections: Direction[] = [
  Direction.NW,
  Direction.N,
  Direction.NE,
  Direction.E,
  Direction.SE,
  Direction.S,
  Direction.SW,
  Direction.W,
];

/**
 * Takes game pieces by position on the board, for eg.
 * { "43": "black", "44": "white", "45": "black"}
 * and returns list of game pieces by color, for eg.
 * { "black": ["43", "45"], "white": ["44"]}
 */
export function getGamePiecesByColor(gamePieces: GamePieces) {
  return Object.entries(gamePieces).reduce(
    (acc: { [key: string]: string[] }, gamePiece) => {
      const color = gamePiece[1];
      acc[color].push(gamePiece[0]);
      return acc;
    },
    { [Color.black]: [], [Color.white]: [] }
  );
}

export function getPossibleMoves(colorToMove: Color, gamePieces: GamePieces) {
  const possibleMoves: { [key: string]: number[] } = {};
  const gamePiecesByColor = getGamePiecesByColor(gamePieces);
  gamePiecesByColor[colorToMove].forEach((piece) => {
    allDirections.forEach((direction) => {
      let canMove = true;
      let captures: number[] = [];
      let currentPosition = parseInt(piece);
      // keep moving in each direction
      while (canMove) {
        const nextSquarePosition = moveOne(currentPosition, direction);
        if (nextSquarePosition == -1) {
          canMove = false;
          break;
        }
        if (gamePieces[nextSquarePosition] === colorToMove) {
          canMove = false;
          break;
        }
        // if empty space
        if (gamePieces[nextSquarePosition] === undefined) {
          // no possible capture
          if (captures.length === 0) {
            canMove = false;
            break;
          }
          // able to capture some
          possibleMoves[nextSquarePosition.toString()] = captures;
          break;
        }
        // next move is opponent
        captures.push(nextSquarePosition);
        currentPosition = nextSquarePosition;
      }
    });
  });
  return possibleMoves;
}
