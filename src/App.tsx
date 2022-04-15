import "./App.css";
import { getColumnNumber, getRowNumber } from "./boardLogic";
import AppHeader from "./components/AppHeader";
import Square from "./components/Square";

const BOARD_SIZE = 8;
function App() {
  const numberOfSquares = BOARD_SIZE ** 2;
  const squares = [];
  for (let i = 0; i < numberOfSquares; i++) {
    squares.push(
      <Square
        key={i.toString()}
        index={i}
        row={getRowNumber(i, BOARD_SIZE)}
        column={getColumnNumber(i, BOARD_SIZE)}
      />
    );
  }
  return (
    <div className="App">
      <AppHeader />
      <div className="App-board">{squares}</div>
    </div>
  );
}

export default App;
