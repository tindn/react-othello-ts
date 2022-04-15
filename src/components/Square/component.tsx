import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { onMoveClick } from "../../store/reducers/app";
import { Color } from "../../types";
import "./styles.css";

interface Props {
  index: string;
  row: number;
  column: number;
}

export function Square(props: Props) {
  // transparent means there's no game piece in the square
  const gamePieceColor =
    useAppSelector(
      (state): Color | undefined => state.app.gamePieces[props.index]
    ) || "transparent";

  const isPossibleMove = useAppSelector(
    (state) => state.app.possibleMoves[props.index]
  );

  const dispatch = useAppDispatch();

  return (
    <div
      className={`square col-${props.column} row-${props.row} ${
        isPossibleMove ? "valid" : "invalid"
      }`}
      onClick={() => {
        if (!isPossibleMove) {
          return;
        }
        dispatch(onMoveClick({ selectedSquare: props.index }));
      }}
    >
      {/* <span className="index-debug">{props.index}</span> */}
      <div
        className={`circle background-${gamePieceColor} ${
          isPossibleMove ? "border" : ""
        }`}
      />
    </div>
  );
}
