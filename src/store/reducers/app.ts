import { createSlice } from "@reduxjs/toolkit";
import { Color } from "../../types";

interface AppState {
  gamePieces: { [key: string]: Color };
}

const DEFAULT_STATE: AppState = {
  gamePieces: {
    27: Color.white,
    28: Color.black,
    35: Color.black,
    36: Color.white,
  },
};

const AppSlice = createSlice({
  name: "App",
  initialState: DEFAULT_STATE,
  reducers: {},
});

export default AppSlice.reducer;
