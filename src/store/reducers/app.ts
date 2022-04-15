import { createSlice } from "@reduxjs/toolkit";
import { getPossibleMoves } from "../../gameLogic";
import { Color, GamePieces } from "../../types";

interface AppState {
  gamePieces: GamePieces;
  nextColorToPlay: Color;
  possibleMoves: { [key: string]: boolean };
}

const DEFAULT_STATE: AppState = {
  gamePieces: {
    27: Color.white,
    28: Color.black,
    35: Color.black,
    36: Color.white,
  },
  nextColorToPlay: Color.black,
  possibleMoves: {},
};

const AppSlice = createSlice({
  name: "App",
  initialState: DEFAULT_STATE,
  reducers: {
    updatePossibleMoves(state) {
      state.possibleMoves = getPossibleMoves(
        state.nextColorToPlay,
        state.gamePieces
      );
    },
  },
});

export const { updatePossibleMoves } = AppSlice.actions;

export default AppSlice.reducer;
