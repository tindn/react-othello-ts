import "./styles.css";
import logo from "../../logo.svg";

export function AppHeader() {
  return (
    <header className="App-header">
      <div className="brand">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Othello</h1>
      </div>
    </header>
  );
}
