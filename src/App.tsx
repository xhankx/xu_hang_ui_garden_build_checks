import React from 'react';
import logo from './logo.svg';
import './App.css';
console.log('App component rendered');  // Log to check if the component is rendering
function App() {
  console.log('App component rendered');  // Log to check if the component is rendering
  return (
    <div className="App">
      <div>
        <h1>Hello from App!</h1>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
