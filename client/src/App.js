import React from 'react';
import MainCard from './MainCard'
import Scrollable from './Scrollable';
import './App.css'

function App() {
  return (
    <>
      <div id="wrapper">
          <div id="a" class="panels">
            <MainCard />
          </div>
          <div id="b" class="panels">
            <Scrollable />
          </div>
          <div id="c" class="panels"></div>
          <div id="d" class="panels"></div>
      </div>
    </>
  )
}

export default App;