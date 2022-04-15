import "./App.css";
import AppHeader from "./components/AppHeader";
import Square from "./components/Square";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="App-board">
        <Square index={0} row={1} column={1} />
        <Square index={1} row={1} column={2} />
      </div>
    </div>
  );
}

export default App;
