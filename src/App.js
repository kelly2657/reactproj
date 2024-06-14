import React from 'react';
import './App.css';
import Header from './pages/Home';
import Profile from './pages/Profile';
import DarkMode from './component/Darkmode';
import './styles/Darkmode.css';

function App() {
  return (
    <div className="App">
      <DarkMode></DarkMode>
      <Header></Header>
      <Profile></Profile>
    </div>
  );
}

export default App;
