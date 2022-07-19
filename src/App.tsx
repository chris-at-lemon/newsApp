import React from "react";
import logo from "./logo.svg";
import "./styles/global.scss";

import { useMainController } from "./controllers/mainController";

function App() {
  const { news } = useMainController();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Great News</h1>
      </header>
    </div>
  );
}

export default App;
