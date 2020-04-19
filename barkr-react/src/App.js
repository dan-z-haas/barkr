import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App overflow-scroll">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
