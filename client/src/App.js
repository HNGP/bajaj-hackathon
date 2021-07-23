import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [connected, setConnected] = useState('');

  useEffect(() => {
    const start = async () => {
      const connect = await fetch('/api');
      const response = await connect.json();
      if(response) {
        setConnected(response);
        console.log(response);
      }
    }

    start();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {connected}
        </p>
      </header>
    </div>
  );
}

export default App;
