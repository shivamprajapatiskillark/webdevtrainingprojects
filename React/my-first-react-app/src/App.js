import logo from "./logo.svg";
import "./App.css";
import React from "react";

//  Functional Component
function getAppUI() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https:reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const getHelloWorld = () => {
  return <h1>Hello Wgfgsdfgdsforld!</h1>;
};
const name = "Shivam prajapati";

const message = "Hello message " + name;
const getmessage = () => {
  return message;
};
const element = 2 > 1? <h1>{getmessage()}</h1> : <p>{message}</p>;

//  Class component
class App extends React.Component {
  //  constructor
  constructor(props) {
    //  initialising component
    super(props);
  }

  render() {
    return element;
  }
}

export default App;
