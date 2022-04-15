import "./styles.css";

interface Props {
  index: number;
  row: number;
  column: number;
}
export function Square(props: Props) {
  return <div className={`square col-${props.column} row-${props.row} `}></div>;
}
