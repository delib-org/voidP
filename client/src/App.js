import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

//functions
import {runSON} from './functions/base';

//model
import MO from './model/mo';

//initiate network



function App() {
  const ns = {};
  useEffect(() => {

    
    ns[0] = new MO(0, 0, [], 0);
    ns[1] = new MO(1, 1, [0], 1);
    ns[2] = new MO(2, 1, [0], 1);

    runSON(ns)
    return () => {
      
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{runSON(ns)}}>Run Learinig cycle</button>
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
