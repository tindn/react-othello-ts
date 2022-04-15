import "./App.css";
import { BOARD_SIZE, getColumnNumber, getRowNumber } from "./boardLogic";
import AppHeader from "./components/AppHeader";
import Square from "./components/Square";

const numberOfSquares = BOARD_SIZE ** 2;
function App() {
  const squares = [];
  for (let i = 0; i < numberOfSquares; i++) {
    squares.push(
      <Square
        key={i.toString()}
        index={i.toString()}
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
