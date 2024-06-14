import React from 'react';
import './App.css';
import Header from './component/Header';
import Profile from './component/Profile';
import DarkMode from './component/Darkmode';
import Card from './component/Card';
import './styles/Darkmode.css';
import Detail from './component/detail';

function App() {
  return (
    <div className="App">
      <DarkMode></DarkMode>
      <Header></Header>
      <Profile></Profile>
      <Detail></Detail>
      {/* <Card></Card> */}
    </div>
  );
}

export default App;
