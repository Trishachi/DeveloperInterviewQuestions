import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Html from "./components/Html/html";
import Javascript from "./components/JavaScript/javascript";
import Css from "./components/Css/css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myState: "Welcome to my Developer Interview Questions Flashcard App",
      currentIcon: "Home",
    };
  }

  onButtonClick = (event) => {
    // console.log(event.target.id + " Button Clicked");
    this.setState({
      currentIcon: event.target.id,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Developer Interview Questions</h1>
        </header>
        <Navigation ButtonClicked={this.onButtonClick} />
        <main>
          {this.state.currentIcon === "Home" && (
            <Home myState={this.state.myState} />
          )}
          {this.state.currentIcon === "Html" && (
            <Html myState={this.state.myState} />
          )}
          {this.state.currentIcon === "Javascript" && (
            <Javascript myState={this.state.myState} />
          )}
          {this.state.currentIcon === "Css" && (
            <Css myState={this.state.myState} />
          )}
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
