import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Developer Interview Questions</h1>
        </header>
        <Navigation />
        <main>
          <p>Main content goes here</p>
        </main>
        <footer>
          <p>Designed and Coded by:</p>
          <a href="https://trishachi.github.io/">
            <em>&copy; 2020 Chisom Trisha Okoye </em>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
