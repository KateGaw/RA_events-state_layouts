import React from "react";
import "./App.css";

import Store from './components/Store';

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <Store />
      </div>
    </div>
  );
}

export default App;
