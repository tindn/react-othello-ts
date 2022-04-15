export enum Color {
  white = "white",
  black = "black",
}

export enum Direction {
  NW = "NW",
  N = "N",
  NE = "NE",
  E = "E",
  SE = "SE",
  S = "S",
  SW = "SW",
  W = "W",
}

export type GamePieces = { [key: string]: Color };
