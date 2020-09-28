import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompanyInfo from './components/Info'
import Appbar from './components/Appbar'

function App() {
  return (
    <div>
      <Appbar />
      <CompanyInfo />
    </div>
  );
}

export default App;
