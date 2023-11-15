import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>jelló, þetta er react!</p>
        <a
          className="App-link"
          href="API.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ýttu hér fyrir API hlutann
        </a>
      </header>
    </div>
  );
}

export default App;
