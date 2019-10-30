import React from 'react';
import './App.css';
import QueensAward from './Component/QueensAward/QueensAward';
import Router from './Component/Router/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Les reines d'haloween
        <Router/>
      </header>
    </div>
  );
}

export default App;
