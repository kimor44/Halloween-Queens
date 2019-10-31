import React from 'react';
import './App.css';
import QueensAward from './Component/QueensAward/QueensAward';
import Router from './Component/Router/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Halloween's Queen</h1>  
       <h2 className='appHeaderH2'>Who will be the most beautiful?</h2>
        <Router/>
      </header>
    </div>
  );
}

export default App;
