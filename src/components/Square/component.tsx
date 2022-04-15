import { useAppSelector } from "../../store/hooks";
import { Color } from "../../types";
import "./styles.css";

interface Props {
  index: number;
  row: number;
  column: number;
}

export function Square(props: Props) {
  // transparent meant there's no game piece in the square
  const gamePieceColor =
    useAppSelector(
      (state): Color | undefined => state.app.gamePieces[props.index.toString()]
    ) || "transparent";

  const isPossibleMove = useAppSelector(
    (state) => state.app.possibleMoves[props.index.toString()]
  );

  return (
    <div className={`square col-${props.column} row-${props.row}`}>
      <span className="index-debug">{props.index}</span>
      <div className={`gamepiece color-${gamePieceColor}`} />
      <div
        className={`possible color-${isPossibleMove ? "black" : "transparent"}`}
      />
    </div>
  );
}
