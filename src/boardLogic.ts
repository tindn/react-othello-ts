import { Direction } from "./types";
export const BOARD_SIZE = 8;

export function getRowNumber(index: number, size: number) {
  return Math.floor(index / size);
}

export function getColumnNumber(index: number, size: number) {
  return index % size;
}

export function moveOne(startingIndex: number, direction: Direction) {
  const row = getRowNumber(startingIndex, BOARD_SIZE);
  const column = getColumnNumber(startingIndex, BOARD_SIZE);

  // top row
  if (
    row === 0 &&
    (direction === Direction.N ||
      direction === Direction.NW ||
      direction === Direction.NE)
  ) {
    return -1;
  }

  // bottom row
  if (
    row === BOARD_SIZE - 1 &&
    (direction === Direction.S ||
      direction === Direction.SW ||
      direction === Direction.SE)
  ) {
    return -1;
  }

  // left column
  if (
    column === 0 &&
    (direction === Direction.W ||
      direction === Direction.NW ||
      direction === Direction.SW)
  ) {
    return -1;
  }

  // right column
  if (
    column === BOARD_SIZE - 1 &&
    (direction === Direction.E ||
      direction === Direction.NE ||
      direction === Direction.SE)
  ) {
    return -1;
  }
  switch (direction) {
    case Direction.NW:
      return startingIndex - BOARD_SIZE - 1;
    case Direction.N:
      return startingIndex - BOARD_SIZE;
    case Direction.NE:
      return startingIndex - BOARD_SIZE + 1;
    case Direction.E:
      return startingIndex + 1;
    case Direction.SE:
      return startingIndex + BOARD_SIZE + 1;
    case Direction.S:
      return startingIndex + BOARD_SIZE;
    case Direction.SW:
      return startingIndex + BOARD_SIZE - 1;
    case Direction.W:
      return startingIndex - 1;
    default:
      return -1;
  }
}
