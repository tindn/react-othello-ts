import { createSlice } from "@reduxjs/toolkit";
import { getPossibleMoves } from "../../gameLogic";
import { Color, GamePieces } from "../../types";

interface AppState {
  gamePieces: GamePieces;
  nextColorToPlay: Color;
  possibleMoves: { [key: string]: number[] };
}

const DEFAULT_STATE: AppState = {
  gamePieces: {
    27: Color.white,
    28: Color.black,
    35: Color.black,
    36: Color.white,
  },
  nextColorToPlay: Color.black,
  possibleMoves: {
    19: [27],
    26: [27],
    37: [36],
    44: [36],
  },
};

const AppSlice = createSlice({
  name: "App",
  initialState: DEFAULT_STATE,
  reducers: {
    onMoveClick(state, action: { payload: { selectedSquare: string } }) {
      const gamePiecesToCapture =
        state.possibleMoves[action.payload.selectedSquare];
      if (!gamePiecesToCapture || !gamePiecesToCapture.length) {
        return;
      }
      state.gamePieces[action.payload.selectedSquare] = state.nextColorToPlay;
      gamePiecesToCapture.forEach((captured) => {
        state.gamePieces[captured] = state.nextColorToPlay;
      });
      const nextColor =
        state.nextColorToPlay === Color.black ? Color.white : Color.black;
      state.possibleMoves = getPossibleMoves(nextColor, state.gamePieces) || {};
      state.nextColorToPlay = nextColor;
    },
    restartGame() {
      return DEFAULT_STATE;
    },
  },
});

export const { onMoveClick, restartGame } = AppSlice.actions;

export default AppSlice.reducer;
