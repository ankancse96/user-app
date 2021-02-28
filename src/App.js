import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [user,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://api.mocki.io/v1/640b8a36')
    .then(res => res.json())
    .then(data=>setUser(data))
  },[])
  return (
    <div className="App">
      <h1>user:{user.length}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
