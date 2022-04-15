import "./styles.css";
import logo from "../../logo.svg";
import { useAppDispatch } from "../../store/hooks";
import { updatePossibleMoves } from "../../store/reducers/app";

export function AppHeader() {
  const dispatch = useAppDispatch();
  return (
    <header className="App-header">
      <div
        className="brand"
        onClick={() => {
          dispatch(updatePossibleMoves());
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Othello</h1>
      </div>
    </header>
  );
}
