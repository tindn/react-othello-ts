import "./styles.css";
import logo from "../../logo.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getGamePiecesByColor } from "../../gameLogic";
import { Color } from "../../types";
import { restartGame } from "../../store/reducers/app";

export function AppHeader() {
  const nextColorToPlay = useAppSelector((state) => state.app.nextColorToPlay);
  const gamePieces = useAppSelector((state) => state.app.gamePieces);
  const gamePiecesByColor = getGamePiecesByColor(gamePieces);
  const hasPossibleMoves =
    Object.keys(useAppSelector((state) => state.app.possibleMoves)).length > 0;
  const dispatch = useAppDispatch();

  function getWinner() {
    if (
      gamePiecesByColor[Color.white].length >
      gamePiecesByColor[Color.black].length
    ) {
      return Color.white;
    } else if (
      gamePiecesByColor[Color.white].length <
      gamePiecesByColor[Color.black].length
    ) {
      return Color.black;
    }
    return "tie";
  }

  function getGameoverText() {
    const winner = getWinner();
    switch (winner) {
      case Color.white:
        return "White wins!";
      case Color.black:
        return "Black wins!";
      case "tie":
        return "It's a tie, no one wins!";
    }
  }

  return (
    <header className="App-header">
      <div className="left">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Othello</h1>
      </div>
      <div className="right">
        <div className="game-stats">
          <div className="next-player-indicator">
            <h4>Next player</h4>
            <div
              className={`circle background-${nextColorToPlay.toString()}`}
            />
          </div>
          <div className="scores">
            <div className="side-score">
              <div className="circle background-white" />
              <strong>{gamePiecesByColor[Color.white].length}</strong>
            </div>
            <div className="side-score">
              <div className="circle background-black" />
              <strong>{gamePiecesByColor[Color.black].length}</strong>
            </div>
          </div>
        </div>
        <div className="game-controls">
          {hasPossibleMoves ? <span /> : <span>{getGameoverText()}</span>}
          <button
            className="restart-game"
            type="button"
            onClick={() => {
              dispatch(restartGame());
            }}
          >
            {hasPossibleMoves ? "Restart" : "Play again"}
          </button>
        </div>
      </div>
    </header>
  );
}
